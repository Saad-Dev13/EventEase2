import React from 'react';

const Event = ({ event }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="event-card">
      <div className="event-header">
        <h3 className="event-title">{event?.title || 'Event Title'}</h3>
        <span className="event-date">{event?.date ? formatDate(event.date) : 'Date TBD'}</span>
      </div>
      <div className="event-body">
        <p className="event-description">{event?.description || 'No description available'}</p>
        <div className="event-details">
          <p className="event-location">
            <strong>Location:</strong> {event?.location || 'Location TBD'}
          </p>
          <p className="event-participants">
            <strong>Participants:</strong> {event?.participants?.length || 0}
          </p>
        </div>
      </div>
      <div className="event-actions">
        <button className="btn btn-primary">View Details</button>
        <button className="btn btn-secondary">Join Event</button>
      </div>
    </div>
  );
};

export default Event;