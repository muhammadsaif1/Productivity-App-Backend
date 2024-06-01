const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database connected: ${connection.connection.host}`);
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); // Exit the process with failure code
    }
};

module.exports = connectToDatabase;
