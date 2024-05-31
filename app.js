require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const tasksRouter = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectToDatabase = require("./config/database");
const corsMiddleware = require("./middleware/corsHandler");

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(tasksRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("THe server is running on port:3000");
});
