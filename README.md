# Event Management App

A full-stack **MERN Event Management Application** where users can explore events, register, cancel registrations, and manage their events through a personal dashboard.


## Tech Stack

### Frontend : Reactjs

### Backend : Nodejs, Expressjs, Mongodb

### Deployment
- Backend: Render
- Frontend: Vercel
- Database: MongoDB Atlas

---

## Project Structure

```bash
event-management-app/
│
├── client/        # React frontend
│   ├── src/
│   └── package.json
│
└── server/        # Express backend
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── server.js
    └── package.json
```

---

## Features

### Authentication
- User Registration
- User Login
- JWT-based Authentication
- Protected Routes

### Events
- View all events
- Search events (debounced search)
- Filter by category
- Filter by location
- View full event details

### Registration System
- Register for events
- Cancel registration
- Seat availability updates automatically
- Prevent duplicate registrations
- Prevent overbooking

### Dashboard
- View registered events
- Separate Upcoming & Past events

### Registration Logic

- Seats decrease when a user registers
- Seats increase when a user cancels
- User cannot register twice
- User cannot register if event is full
- Dashboard auto-syncs registration status

---

## Environment Variables

### Backend (`server/.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Frontend (`client/.env`)

After backend deployment:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/event-management-app.git
cd event-management-app
```

### 2. Backend Setup

```bash
cd server
npm install
npm start
```

#### Backend runs at: http://localhost:5000

### 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

#### Frontend runs at: http://localhost:5173


---



## Author
NimoMach, 
Full-stack MERN project built for learning and deployment practice.

