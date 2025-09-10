import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Event from './Event';
import './EventsList.css';

const EventsList = ({ user }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/event/');
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch events');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="events-section">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="loading">Loading events...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="events-section">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="error">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="events-section">
      <div className="container">
        <h2>Upcoming Events</h2>
        {events.length === 0 ? (
          <div className="no-events">
            <p>No events available at the moment.</p>
            <p>Check back later for exciting upcoming events!</p>
          </div>
        ) : (
          <div className="events-grid">
            {events.map(event => (
              <Event key={event._id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsList;
