const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "Connection error:"));
  db.once("open", () => {
    console.log("Database connected");
  });
};

module.exports = connectToDatabase;
