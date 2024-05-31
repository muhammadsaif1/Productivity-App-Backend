require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const tasksRouter = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectToDatabase = require("./config/database");
const corsMiddleware = require("./middleware/corsHandler");

connectToDatabase();

app.use(express.json());
app.use(corsMiddleware);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(tasksRouter);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log("THe server is running on port:3000");
});
