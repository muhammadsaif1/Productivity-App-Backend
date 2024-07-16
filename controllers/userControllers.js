const User = require("../models/user");

// @desc create new user
// @POST /api/signup
// @ access public

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Unable to create new User all fields are Mandatory",
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const newUser = new User({
      username,
      email,
      password,
    });
    await newUser.save();
    const token = newUser.generateAuthToken();

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: newUser,
      token,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create new User" });
  }
};
// @desc login a user
// @POST /api/signin
// @ access public

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: " All fields are Mandatory to Login",
      });
    }
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const token = user.generateAuthToken();

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "couldn't signin" });
  }
};
module.exports = { registerUser, loginUser };
