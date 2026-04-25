# 🔐 AuthVault — MERN Stack Authentication App

A full-stack authentication system built with the **MERN stack** (MongoDB, Express.js, React, Node.js). Features secure JWT-based authentication, password hashing with bcrypt, a modern glassmorphism UI, and production-ready architecture.

![Tech Stack](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Tech Stack](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Tech Stack](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tech Stack](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Tech Stack](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

## ✨ Features

- **User Signup & Login** — Register and authenticate with email/password
- **JWT Authentication** — Secure token-based sessions (7-day expiry)
- **Password Hashing** — Bcrypt with 12-round salt for maximum security
- **Protected Routes** — Dashboard accessible only to authenticated users
- **Persistent Sessions** — Stay logged in across page refreshes
- **Form Validation** — Client-side and server-side validation
- **Modern UI** — Glassmorphism design with animations (Tailwind CSS)
- **Responsive** — Mobile-first design that works on all devices
- **Error Handling** — Global error middleware with descriptive messages
- **Toast Notifications** — Real-time feedback for user actions

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | React 18, Vite, Tailwind CSS 3      |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB Atlas, Mongoose ODM         |
| Auth       | JSON Web Tokens (JWT), bcryptjs     |
| HTTP       | Axios                               |
| Routing    | React Router v6                     |
| Notifications | react-hot-toast                  |

---

## 📁 Project Structure

```
mern-auth-app/
├── client/                     # React frontend
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── Navbar.jsx      # Navigation bar
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx # Auth state management
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Landing page
│   │   │   ├── Login.jsx       # Login form
│   │   │   ├── Signup.jsx      # Registration form
│   │   │   └── Dashboard.jsx   # Protected dashboard
│   │   ├── utils/
│   │   │   └── api.js          # Axios instance
│   │   ├── App.jsx             # Root component + routing
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Global styles
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
├── server/                     # Express backend
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   └── authController.js   # Auth logic
│   ├── middleware/
│   │   ├── auth.js             # JWT verification
│   │   └── errorHandler.js     # Global error handler
│   ├── models/
│   │   └── User.js             # Mongoose user schema
│   ├── routes/
│   │   └── authRoutes.js       # Auth API routes
│   ├── server.js               # Express entry point
│   ├── .env.example            # Environment template
│   └── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ installed
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (free tier works)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/mern-auth-app.git
cd mern-auth-app
```

### 2. Setup MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas) and create a free cluster
2. Create a database user with a password
3. Whitelist your IP address (or use `0.0.0.0/0` for development)
4. Get your connection string (click **Connect** → **Connect your application**)

### 3. Configure Environment Variables

```bash
# In the server directory, create a .env file:
cd server
cp .env.example .env
```

Edit `server/.env` with your values:

```env
MONGO_URI=mongodb+srv://youruser:yourpassword@cluster0.xxxxx.mongodb.net/mern-auth?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_random_string_here
PORT=5000
CLIENT_URL=http://localhost:5173
```

### 4. Install Dependencies & Run

```bash
# Install backend dependencies
cd server
npm install

# In a new terminal, install frontend dependencies
cd client
npm install

# Start the backend (from /server)
npm run dev

# Start the frontend (from /client)
npm run dev
```

The app will be running at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

---

## 📡 API Endpoints

| Method | Endpoint            | Description        | Auth Required |
| ------ | ------------------- | ------------------ | ------------- |
| POST   | `/api/auth/signup`  | Register new user  | No            |
| POST   | `/api/auth/login`   | Login user         | No            |
| GET    | `/api/auth/profile` | Get user profile   | Yes (JWT)     |
| GET    | `/`                 | Health check       | No            |

---

## 🌐 Deployment

### Backend → Render

1. Push code to GitHub
2. Go to [render.com](https://render.com) → **New Web Service**
3. Connect your GitHub repo, select the `server` directory
4. Set **Build Command**: `npm install`
5. Set **Start Command**: `node server.js`
6. Add environment variables: `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`
7. Deploy!

### Frontend → Vercel

1. Go to [vercel.com](https://vercel.com) → **Import Project**
2. Connect your GitHub repo, set **Root Directory** to `client`
3. Add environment variable: `VITE_API_URL=https://your-backend.onrender.com/api`
4. Deploy!

### Frontend → Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com) → **Add new site**
2. Connect your GitHub repo
3. Set **Base directory**: `client`
4. Set **Build command**: `npm run build`
5. Set **Publish directory**: `client/dist`
6. Add environment variable: `VITE_API_URL=https://your-backend.onrender.com/api`
7. Add a `client/public/_redirects` file with: `/* /index.html 200`

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using the MERN Stack**
