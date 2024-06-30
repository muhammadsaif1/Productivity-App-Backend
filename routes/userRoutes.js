const Router = require("express");

const { registerUser, loginUser } = require("../controllers/userControllers");
const usersRouter = Router();

usersRouter.post("/api/signup", registerUser);
usersRouter.post("/api/signin", loginUser);

module.exports = usersRouter;
