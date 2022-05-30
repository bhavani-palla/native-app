const express = require("express"); // Import express, a lightweight framework
const app = express(); // Init express and same it to "app" variable
const mongoose = require("mongoose"); // Import mongoose, used for handling DB and giving NoSQL DB such as MongoDB, the abilities of a relational DB such as MySQL
const bodyParser = require("body-parser"); // Import for handling different formats
const cors = require("cors"); // Import for handling cross-origin requests

app.use(cors()); // Allowing cross-origin requests
app.use(bodyParser.json()); // Format data to JSON

// Import routes
const tasksRoute = require("./routes/tasks");
app.use("/tasks", tasksRoute);

// Mongo db connection configuration
mongoose.connect(
  "mongo db URL removed & stored for privacy",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

//Server starts at port
app.listen(5000);
