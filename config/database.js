const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); // Exit the process with failure code
    }
};

module.exports = connectToDatabase;
