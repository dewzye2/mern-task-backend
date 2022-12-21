const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoutes")
const cors = require("cors");
// const response = require("express");
mongoose.set("strictQuery", true); // remover erro console

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
  origin: ["http://localhost:3000", "https://mern-task-dewzye.onrender.com", "https://mern-task-dewzye-api.onrender.com"]
}));

app.use("/api/tasks", taskRoutes)
// app.use(taskRoutes) same as ^


// Routes
app.get("/", (req, res) => {
  res.send("Home page");
});

const PORT = process.env.PORT || 5000

// Connect to MongoDB
const startServer = async () => {
  try {
      await connectDB();
      app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
      });      
    } catch (error) {
      console.log(error);
    }
};

startServer();