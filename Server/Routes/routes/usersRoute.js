const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { findUserByEmail, addUser,findUserByuserId } = require("../../mssql"); // Adjust the path based on your file structure
const authMiddleware = require("../../middleware/authMiddleware");

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await findUserByEmail(req.body.email);

  
  
    if (!user) {
      return res.send({
        success: false,
        message: "User does not exist",
      });
    }

    // Verify password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.send({
        success: false,
        message: "Invalid password",
      });
    }
    console.log("token",user.userId)
    // Generate token
    const token = jwt.sign({ _id: user.userId }, process.env.jwt_secret, {
      expiresIn: "1d",
    });

    res.send({
      success: true,
      message: "User logged in successfully",
      data: token,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// Register
router.post("/register", async (req, res) => {
  try {
    const user = await findUserByEmail(req.body.email);

    if (user) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user object with email, password, and name
    const newUser = {
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name,
    };

    const addedUser = await addUser(newUser);

    if (addedUser) {
      return res.send({
        success: true,
        message: "User registered successfully",
      });
    } else {
      return res.send({
        success: false,
        message: "Failed to register user",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// Protected route
router.get("/get-current-user", authMiddleware, async (req, res) => {
  try {
    console.log("at getuser",req.body);

    const user = await findUserByuserId(req.body.userId); // Assuming findUserByEmail can also find by ID
    
    if (!user) {
      return res.send({
        success: false,
        message: "User not found",
      });
    }

    // Remove the password from the user object before sending the response
    const userWithoutPassword = { ...user._doc, password: undefined };

    res.send({
      success: true,
      message: "User details fetched successfully",
      data: userWithoutPassword,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
