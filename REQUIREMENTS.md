# EventEase2 - System Requirements

## System Requirements

### Operating System
- Windows 10/11
- macOS 10.15 or later
- Ubuntu 18.04 LTS or later
- Any Linux distribution with Node.js support

### Software Requirements
- **Node.js**: Version 16.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Git**: Latest version for version control
- **Code Editor**: VS Code (recommended) or any text editor

### Database Requirements
Choose one of the following:

#### Option 1: MongoDB Atlas (Cloud - Recommended)
- Free MongoDB Atlas account
- Internet connection for database access
- No local installation required

#### Option 2: Local MongoDB Installation
- MongoDB Community Server 5.0 or higher
- MongoDB Compass (optional GUI)
- Local storage: Minimum 1GB free space

### Hardware Requirements
- **RAM**: Minimum 4GB, Recommended 8GB+
- **Storage**: Minimum 2GB free space
- **CPU**: Any modern processor (Intel/AMD)
- **Network**: Internet connection required

## Backend Dependencies

### Production Dependencies
```json
{
  "express": "^4.18.2",
  "mongoose": "^8.0.0", 
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "jsonwebtoken": "^9.0.2",
  "bcrypt": "^5.1.1"
}
```

### Development Dependencies
```json
{
  "nodemon": "^3.0.1"
}
```

## Frontend Dependencies

### Production Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0", 
  "react-router-dom": "^6.8.0",
  "axios": "^1.6.0",
  "react-hot-toast": "^2.4.1"
}
```

### Build Tools & Development Dependencies
```json
{
  "vite": "^4.4.5",
  "@vitejs/plugin-react": "^4.0.3",
  "@types/react": "^18.2.15",
  "@types/react-dom": "^18.2.7",
  "eslint": "^8.45.0",
  "eslint-plugin-react": "^7.32.2",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.3"
}
```

## Environment Variables

### Required Environment Variables
Create a `.env` file in the `backend` directory with:

```env
# Database Configuration
MONGO_URI=mongodb://localhost:27017/eventease
# or for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/eventease

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=7d

# Server Configuration  
PORT=4000

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

## Port Configuration

### Default Ports
- **Backend Server**: 4000
- **Frontend Development Server**: 5173 (Vite)
- **MongoDB**: 27017 (if running locally)

### Port Conflicts Resolution
If ports are already in use, you can change them:

**Backend Port**: Modify `PORT` in `.env` file
**Frontend Port**: Use `--port` flag with vite
```bash
npm run dev -- --port 3000
```

## Installation Verification

### Check Node.js Installation
```bash
node --version  # Should show v16.0.0 or higher
npm --version   # Should show 8.0.0 or higher
```

### Check Git Installation
```bash
git --version   # Should show git version
```

### Check MongoDB Connection
For MongoDB Atlas: Test connection string in MongoDB Compass
For Local MongoDB: 
```bash
mongosh  # Should connect to local MongoDB
```

## Browser Compatibility

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Recommended Browser
- Chrome (latest version) for best development experience

## Development Environment Setup

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer
- GitLens

### Recommended Terminal
- Windows: PowerShell or Command Prompt
- macOS: Terminal or iTerm2
- Linux: Default terminal or Terminator

## Troubleshooting Requirements

### Common Issues and Solutions

#### Node.js Version Issues
```bash
# Check current version
node --version

# Install Node Version Manager (recommended)
# Windows: Use nvm-windows
# macOS/Linux: Use nvm
```

#### Permission Issues (macOS/Linux)
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
```

#### MongoDB Connection Issues
- Ensure MongoDB service is running
- Check firewall settings
- Verify network connectivity for Atlas
- Confirm connection string format

#### Port Already in Use
```bash
# Windows
netstat -ano | findstr :4000
taskkill /PID <PID_NUMBER> /F

# macOS/Linux  
lsof -ti:4000 | xargs kill -9
```

## Performance Recommendations

### Development Environment
- Use SSD for faster file operations
- Close unnecessary applications
- Use latest versions of Node.js and npm
- Enable Windows Developer Mode (Windows only)

### Production Deployment
- Use production builds (`npm run build`)
- Enable gzip compression
- Use CDN for static assets
- Implement proper caching strategies

## Security Considerations

### Environment Variables
- Never commit `.env` files to version control
- Use strong JWT secrets (minimum 256 bits)
- Rotate JWT secrets periodically

### Database Security
- Use strong MongoDB passwords
- Enable MongoDB authentication
- Whitelist only necessary IP addresses
- Regular security updates

## Additional Resources

### Documentation Links
- [Node.js Documentation](https://nodejs.org/docs/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)

### Community Support
- [Stack Overflow](https://stackoverflow.com/)
- [Reddit r/node](https://www.reddit.com/r/node/)
- [Reddit r/reactjs](https://www.reddit.com/r/reactjs/)
