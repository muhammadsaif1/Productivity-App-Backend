require("dotenv").config();

const cors = require("cors");
const express = require("express");
const tasksRouter = require("./routes/taskRoutes");
const usersRouter = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectToDatabase = require("./config/database");
const corsMiddleware = require("./middleware/corsHandler");

connectToDatabase();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(tasksRouter);
app.use(usersRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`The server is running on port:${PORT}`);
});
