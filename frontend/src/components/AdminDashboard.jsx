import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from './Navbar';
import Footer from './Footer';
import './AdminDashboard.css';

const AdminDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('events');
  const [events, setEvents] = useState([]);
  const [messages, setMessages] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  
  // Event form state
  const [eventForm, setEventForm] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    participants: []
  });

  const token = localStorage.getItem('token');

  // Fetch events
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/event/');
      setEvents(response.data);
    } catch (error) {
      toast.error('Failed to fetch events');
    }
  };

  // Fetch messages
  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/message/all', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessages(response.data.messages);
    } catch (error) {
      toast.error('Failed to fetch messages');
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchMessages();
  }, []);

  // Handle event form submission
  const handleEventSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingEvent) {
        // Update event
        await axios.put(`http://localhost:4000/api/v1/event/update/${editingEvent._id}`, eventForm, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Event updated successfully!');
      } else {
        // Create event
        await axios.post('http://localhost:4000/api/v1/event/create', eventForm, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Event created successfully!');
      }
      
      setEventForm({ title: '', description: '', date: '', location: '', participants: [] });
      setShowEventForm(false);
      setEditingEvent(null);
      fetchEvents();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save event');
    }
  };

  // Delete event
  const deleteEvent = async (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`http://localhost:4000/api/v1/event/delete/${eventId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Event deleted successfully!');
        fetchEvents();
      } catch (error) {
        toast.error('Failed to delete event');
      }
    }
  };

  // Delete message
  const deleteMessage = async (messageId) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await axios.delete(`http://localhost:4000/api/v1/message/delete/${messageId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Message deleted successfully!');
        fetchMessages();
      } catch (error) {
        toast.error('Failed to delete message');
      }
    }
  };

  // Edit event
  const editEvent = (event) => {
    setEventForm({
      title: event.title,
      description: event.description,
      date: event.date.split('T')[0], // Format date for input
      location: event.location,
      participants: event.participants || []
    });
    setEditingEvent(event);
    setShowEventForm(true);
  };

  return (
    <>
      <Navbar user={user} onLogout={onLogout} />
      <div className="admin-dashboard">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Welcome, {user?.email}!</p>
        </div>

        <div className="dashboard-tabs">
          <button 
            className={activeTab === 'events' ? 'active' : ''}
            onClick={() => setActiveTab('events')}
          >
            Manage Events
          </button>
          <button 
            className={activeTab === 'messages' ? 'active' : ''}
            onClick={() => setActiveTab('messages')}
          >
            View Messages
          </button>
        </div>

        {activeTab === 'events' && (
          <div className="events-section">
            <div className="section-header">
              <h2>Events Management</h2>
              <button 
                className="btn-primary"
                onClick={() => {
                  setShowEventForm(true);
                  setEditingEvent(null);
                  setEventForm({ title: '', description: '', date: '', location: '', participants: [] });
                }}
              >
                Create New Event
              </button>
            </div>

            {showEventForm && (
              <div className="event-form-modal">
                <div className="modal-content">
                  <h3>{editingEvent ? 'Edit Event' : 'Create New Event'}</h3>
                  <form onSubmit={handleEventSubmit}>
                    <input
                      type="text"
                      placeholder="Event Title"
                      value={eventForm.title}
                      onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                      required
                    />
                    <textarea
                      placeholder="Event Description"
                      value={eventForm.description}
                      onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                      required
                    />
                    <input
                      type="datetime-local"
                      value={eventForm.date}
                      onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      value={eventForm.location}
                      onChange={(e) => setEventForm({...eventForm, location: e.target.value})}
                      required
                    />
                    <div className="form-buttons">
                      <button type="submit" className="btn-primary">
                        {editingEvent ? 'Update Event' : 'Create Event'}
                      </button>
                      <button 
                        type="button" 
                        className="btn-secondary"
                        onClick={() => {
                          setShowEventForm(false);
                          setEditingEvent(null);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            <div className="events-list">
              {events.length === 0 ? (
                <p>No events found.</p>
              ) : (
                events.map(event => (
                  <div key={event._id} className="event-card-admin">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p><strong>Participants:</strong> {event.participants?.length || 0}</p>
                    <div className="event-actions">
                      <button onClick={() => editEvent(event)} className="btn-edit">
                        Edit
                      </button>
                      <button onClick={() => deleteEvent(event._id)} className="btn-delete">
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="messages-section">
            <h2>Contact Messages</h2>
            <div className="messages-list">
              {messages.length === 0 ? (
                <p>No messages found.</p>
              ) : (
                messages.map(message => (
                  <div key={message._id} className="message-card">
                    <div className="message-header">
                      <h4>{message.name}</h4>
                      <p className="message-email">{message.email}</p>
                      <button 
                        onClick={() => deleteMessage(message._id)} 
                        className="btn-delete-small"
                      >
                        Delete
                      </button>
                    </div>
                    <h5>{message.subject}</h5>
                    <p>{message.message}</p>
                    <small>Received: {new Date(message._id.toString().substring(0,8), 16).toLocaleString()}</small>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
