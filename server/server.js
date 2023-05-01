const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

//Routes
const userRoutes = require("./routes/userRoutes");
const interviewRoutes = require("./routes/interviewRoutes");

//Middlewares
const errorHandler = require("./middleware/errorMiddleware");

const app  = express();

// Body parser
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes); // User routes
app.use('/api/interviews', interviewRoutes); // Interview routes

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
