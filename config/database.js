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

// try {
//   mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
//   console.log("Database Connected:");
// } catch (err) {
//   console.log(err);
//   process.exit(1);
// }
