const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route (IMPORTANT – fixes Cannot GET /)
app.get("/", (req, res) => {
  res.send("Task Manager Backend is running 🚀");
});

// API routes
app.use("/api/tasks", taskRoutes);

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// Port (Render uses process.env.PORT)
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
