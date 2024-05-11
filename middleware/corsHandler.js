const cors = require("cors");

const corsMiddleware = cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
});

module.exports = corsMiddleware;
