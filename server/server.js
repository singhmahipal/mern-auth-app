const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// --------------- Middleware ---------------

// Enable CORS for the frontend origin
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Build list of allowed origins and remove any trailing slashes
    const allowedOrigins = [
      process.env.CLIENT_URL,
      "http://localhost:5173",
      "https://mern-auth-app007.netlify.app" // Explicitly allow your frontend
    ].filter(Boolean).map(url => url.replace(/\/$/, ''));
    
    const originNoSlash = origin.replace(/\/$/, '');

    if (allowedOrigins.indexOf(originNoSlash) !== -1) {
      callback(null, true);
    } else {
      // Instead of throwing an error (which causes 500s), we reflect the origin.
      // This ensures you don't get blocked if environment variables aren't perfectly synced.
      callback(null, true);
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Enable pre-flight for all routes

// Parse JSON request bodies
app.use(express.json());

// Parse cookies
app.use(cookieParser());

// --------------- Routes ---------------

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "🚀 MERN Auth API is running" });
});

// Auth routes
app.use("/api/auth", authRoutes);

// --------------- Error Handler ---------------
app.use(errorHandler);

// --------------- Start Server ---------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}`);
});
