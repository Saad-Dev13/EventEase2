# EventEase2 - Complete Event Management System

EventEase2 is a full-stack MERN application designed for comprehensive event management. Features a professional admin dashboard, role-based authentication, and a beautiful dark-themed UI. Perfect for universities, organizations, or any event management needs.

## Key Features

### Authentication & Authorization
- **JWT-based Authentication** with secure login/signup
- **Role-based Access Control** (Admin/User roles)
- **Profile Management** with user info display in navbar
- **Protected Routes** for admin-only access

### Admin Dashboard
- **Complete Event Management**: Create, edit, delete events with intuitive forms
- **Message Management**: View and manage contact form submissions
- **Real-time Statistics**: Event and message counts
- **Tabbed Interface**: Clean organization between events and messages
- **Responsive Admin Panel**: Works perfectly on all devices

### Event System
- **Public Event Display**: Beautiful card-based event listing
- **Event Details**: Title, description, date, location, participant count
- **Event Categories**: Support for concerts, parties, auto shows, game nights, etc.
- **Image Integration**: Event type-specific imagery

### Contact & Communication
- **Contact Form**: Users can send messages with name, email, subject, message
- **Contact Information Display**: Address, phone numbers, email addresses
- **Interactive Map**: Embedded Google Maps for location
- **Admin Message Management**: View and delete contact submissions

### Modern UI/UX
- **Consistent Dark Theme**: Professional (#121212, #1c1c1c, #2c2c2c) color scheme
- **Orange Accent Colors** (#ff9800) for branding and highlights
- **Responsive Design**: Mobile-first approach with perfect tablet/desktop scaling
- **Active Navigation**: Current page highlighting with smooth transitions
- **Professional Cards**: Hover effects and modern styling throughout
- **Accessibility**: WCAG compliant design principles

## Technology Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **React Router DOM** - Client-side routing with active link highlighting
- **Axios** - HTTP client for API communication
- **React Hot Toast** - Beautiful notification system
- **CSS3** - Component-based styling with modern features

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework with middleware support
- **MongoDB** - NoSQL database with flexible schema
- **Mongoose** - ODM for MongoDB with validation
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing for security

### Development Tools
- **Vite** - Fast development server and build tool
- **ESLint** - Code linting and quality assurance
- **Git** - Version control system

## Getting Started

### Prerequisites

Before running this project, make sure you have the following installed on your computer:

- **Node.js** (v16 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** - Choose one of these options:
  - **MongoDB Atlas** (Cloud - Recommended for beginners)
  - **Local MongoDB installation**
- **Git** - [Download from git-scm.com](https://git-scm.com/)
- **Code Editor** - VS Code recommended

### Installation Guide

#### Step 1: Clone the Repository
```bash
git clone https://github.com/Saad-Dev13/EventEase2.git
cd EventEase2
```

#### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
```

**Backend Dependencies Installed:**
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `jsonwebtoken` - JWT authentication
- `bcrypt` - Password hashing
- `cors` - Cross-origin requests
- `dotenv` - Environment variables

#### Step 3: Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

**Frontend Dependencies Installed:**
- `react` - UI library
- `react-router-dom` - Routing
- `axios` - HTTP requests
- `react-hot-toast` - Notifications
- `vite` - Build tool

### Database Setup (Choose One Option)

#### Option A: MongoDB Atlas (Cloud - Recommended)

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Sign up for a free account
   - Create a new cluster (free tier available)

2. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/database`)

3. **Set Database Access**
   - Go to "Database Access" tab
   - Add a database user with username and password
   - Remember these credentials!

4. **Set Network Access**
   - Go to "Network Access" tab
   - Add IP Address: `0.0.0.0/0` (allows access from anywhere)
   - Or add your specific IP address

#### Option B: Local MongoDB Installation

1. **Download & Install MongoDB**
   - Go to [MongoDB Download Center](https://www.mongodb.com/try/download/community)
   - Download and install for your operating system
   - Start MongoDB service

2. **Local Connection String**
   - Use: `mongodb://localhost:27017/eventease`

### Environment Variables Setup

#### Step 1: Create .env File
Navigate to the `backend` folder and create a `.env` file:

```bash
cd backend
# Create .env file (Windows)
echo. > .env

# Or create manually using your code editor
```

#### Step 2: Configure .env File
Open the `.env` file in your code editor and add:

```env
# Database Configuration
MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/eventease?retryWrites=true&w=majority

# JWT Configuration (Generate a strong secret)
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
JWT_EXPIRES_IN=7d

# Server Configuration
PORT=4000

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

#### Step 3: Replace Placeholder Values

**For MongoDB Atlas:**
```env
MONGO_URI=mongodb+srv://myusername:mypassword123@cluster0.abc123.mongodb.net/eventease?retryWrites=true&w=majority
```

**For Local MongoDB:**
```env
MONGO_URI=mongodb://localhost:27017/eventease
```

**Generate JWT Secret:**
You can generate a random JWT secret using:
```bash
# In Node.js console or online generator
require('crypto').randomBytes(64).toString('hex')
```

**Example Complete .env File:**
```env
MONGO_URI=mongodb+srv://eventease_user:MyPassword123@cluster0.xyz456.mongodb.net/eventease?retryWrites=true&w=majority
JWT_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2
JWT_EXPIRES_IN=7d
PORT=4000
FRONTEND_URL=http://localhost:5173
```

### Running the Application

#### Step 1: Start Backend Server
```bash
cd backend
npm start
```
**Expected Output:**
```
Server is running on port 4000
Connected to MongoDB successfully
```

#### Step 2: Start Frontend (New Terminal)
```bash
cd frontend
npm run dev
```
**Expected Output:**
```
  Local:   http://localhost:5173/
  Network: use --host to expose
```

### Accessing the Application

1. **Open your browser** and go to: `http://localhost:5173`
2. **Create an account** using the signup form
3. **For admin access**: 
   - Sign up normally first
   - Go to MongoDB (Atlas dashboard or local)
   - Find your user in the `users` collection
   - Change the `role` field from `"user"` to `"admin"`
   - Log out and log back in to see admin features

### Troubleshooting Common Issues

#### Database Connection Issues
```bash
# Error: MongoNetworkError
# Solution: Check your IP whitelist in MongoDB Atlas
# Or ensure MongoDB is running locally
```

#### Port Already in Use
```bash
# Error: Port 4000 is already in use
# Solution: Kill the process or change PORT in .env
netstat -ano | findstr :4000  # Windows
kill -9 $(lsof -ti:4000)      # Mac/Linux
```

#### JWT Secret Missing
```bash
# Error: JWT secret not defined
# Solution: Make sure JWT_SECRET is set in .env file
```

#### CORS Issues
```bash
# Error: Access blocked by CORS policy
# Solution: Ensure FRONTEND_URL is correct in .env
```

### First Time Setup Checklist

- [ ] Node.js and npm installed
- [ ] Repository cloned
- [ ] Backend dependencies installed (`npm install` in backend folder)
- [ ] Frontend dependencies installed (`npm install` in frontend folder)
- [ ] MongoDB database created (Atlas or local)
- [ ] `.env` file created with correct values
- [ ] Backend server running on port 4000
- [ ] Frontend server running on port 5173
- [ ] Can access application in browser
- [ ] Can create user account
- [ ] Admin role configured (if needed)

### Quick Start Summary

```bash
# 1. Clone and setup
git clone https://github.com/Saad-Dev13/EventEase2.git
cd EventEase2

# 2. Install dependencies
cd backend && npm install
cd ../frontend && npm install

# 3. Create .env file in backend folder with your MongoDB URI and JWT secret

# 4. Run servers (2 terminals)
# Terminal 1:
cd backend && npm start

# Terminal 2:
cd frontend && npm run dev

# 5. Open http://localhost:5173 in your browser
```

## Project Structure

```
EventEase2/
├── backend/
│   ├── controller/
│   │   ├── authController.js       # Authentication logic
│   │   ├── eventController.js      # Event CRUD operations
│   │   └── messageController.js    # Contact message handling
│   ├── models/
│   │   ├── userSchema.js          # User model with roles
│   │   ├── eventSchema.js         # Event model
│   │   └── messageSchema.js       # Message model
│   ├── router/
│   │   ├── authRouter.js          # Auth routes (/login, /signup, /me)
│   │   ├── eventRouter.js         # Event routes (protected)
│   │   └── messageRouter.js       # Message routes
│   ├── middleware/
│   │   └── authMiddleware.js      # JWT verification
│   ├── database/
│   │   └── dbConnection.js        # MongoDB connection
│   ├── config/                    # Environment configuration
│   ├── app.js                     # Express app setup
│   └── server.js                  # Server startup
└── frontend/
    ├── public/                    # Static assets & images
    ├── src/
    │   ├── components/
    │   │   ├── AdminDashboard.jsx  # Admin panel with tabs
    │   │   ├── EventsList.jsx      # Public event display
    │   │   ├── Navbar.jsx          # Navigation with profile card
    │   │   ├── Contact.jsx         # Contact form & info
    │   │   ├── About.jsx           # About page with card design
    │   │   ├── Footer.jsx          # Newsletter subscription
    │   │   ├── Login.jsx           # Authentication forms
    │   │   ├── Signup.jsx
    │   │   ├── HomePage.jsx        # Landing page
    │   │   ├── ServicesPage.jsx    # Services showcase
    │   │   └── [Component].css     # Individual component styles
    │   ├── services/
    │   │   └── eventService.js     # API service functions
    │   ├── App.jsx                 # Main app with routing
    │   ├── App.css                 # Global styles
    │   └── main.jsx                # App entry point
    ├── package.json
    └── vite.config.js             # Vite configuration
```

## API Endpoints

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/signup` - User registration
- `GET /api/v1/auth/me` - Get current user info

### Events (Protected Routes)
- `GET /api/v1/event/` - Get all events (public)
- `POST /api/v1/event/create` - Create event (admin only)
- `PUT /api/v1/event/update/:id` - Update event (admin only)
- `DELETE /api/v1/event/delete/:id` - Delete event (admin only)

### Messages (Protected Routes)
- `POST /api/v1/message/send` - Send contact message (public)
- `GET /api/v1/message/all` - Get all messages (admin only)
- `DELETE /api/v1/message/delete/:id` - Delete message (admin only)

## Database Schema

### User Schema
```js
{
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}
```

### Event Schema
```js
{
  title: { type: String, required: true, minLength: 3 },
  description: { type: String, required: true, minLength: 10 },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
}
```

### Message Schema
```js
{
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}
```

## Design System

### Color Palette
- **Primary Background**: `#121212` (Dark charcoal)
- **Secondary Background**: `#1c1c1c` (Medium dark)
- **Card Background**: `#2c2c2c` (Light dark)
- **Accent Color**: `#ff9800` (Orange)
- **Text Primary**: `#e0e0e0` (Light gray)
- **Text Secondary**: `#c0c0c0` (Medium gray)

### Typography
- **Headings**: Bold, uppercase with letter spacing
- **Body Text**: Clean, readable with proper line height
- **Interactive Elements**: Hover states and transitions

## Features Showcase

### Admin Dashboard
- Clean tabbed interface for managing events and messages
- Real-time CRUD operations with immediate feedback
- Professional form designs with validation
- Responsive grid layouts for event cards

### User Experience
- Intuitive navigation with active page highlighting
- Profile card showing user information and role
- Beautiful event displays with hover effects
- Contact form with embedded location map

### Responsive Design
- Mobile-first approach with breakpoints at 768px and 480px
- Flexible grid systems that adapt to screen size
- Touch-friendly interface elements
- Optimized images and loading states

---

## Contributors

**Mohammad Saad** - Full-stack Developer & UI/UX Designer  
**Huzaifa Abid** - Backend Developer & Database Architect

---

## License

This project is open source and available under the [MIT License](LICENSE).
