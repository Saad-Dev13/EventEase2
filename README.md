# EventEase2

EventEase2 is a MERN stack-based web application for event management. It allows admins to create, update, and delete events, while users can view and book events. The project supports multiple event types and is designed to be scalable for use beyond a single university or organization.

## Features

- **Admin Panel**: Create, update, and delete events.
- **User Authentication**: Signup, login, and secure access using JWT.
- **Event Management**: View all events, including details like title, description, date, location, and number of participants.
- **Contact & Messaging**: Users can send messages via a contact form.
- **Responsive UI**: Built with React and styled for a modern look.
- **REST API**: Built with Express and MongoDB, using Mongoose for schema validation.

## Technologies Used

- **Frontend**: React, Axios, React Router, react-hot-toast
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT
- **Styling**: CSS (component-based)

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saad-Dev13/EventEase2.git
   cd EventEase2
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `backend/config` directory with the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=7d
   PORT=4000
   ```

5. **Run the backend server**
   ```bash
   cd ../backend
   npm start
   ```

6. **Run the frontend**
   ```bash
   cd ../frontend
   npm start
   ```

7. **Open your browser**
   - Visit `http://localhost:3000` for the frontend.
   - Backend runs on `http://localhost:4000`.

## Folder Structure

```
EventEase2/
  backend/
    controller/
    models/
    router/
    config/
    app.js
    server.js
  frontend/
    src/
      components/
      App.jsx
      App.css
```

## Example Event Schema

```js
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, minLength: 3, trim: true },
  description: { type: String, required: true, minLength: 10 },
  date: { type: Date, required: true },
  location: { type: String, required: true, minLength: 3 },
  participants: { type: Number, required: true, min: 1 },
  createdAt: { type: Date, default: Date.now },
});
```

## Screenshots

<!-- Add screenshots of your UI here -->
- Home Page  
- Event Creation Form  
- Event List  
- Admin Panel  
- Database Example


---

**Project by Mohammad Saad & Huzaifa Abid**
