const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { findUserByEmail } = require("../../mssql"); // Adjust the path based on your file structure

router.post("/login", async (req, res) => {
  try {
    const user = await findUserByEmail(req.body.email);

    if (!user) {
      return res.send({
        success: false,
        message: "User does not exist",
      });
    }
    else{
      return res.send({
        success: true,
        message: "User exist",
      });
    }

   
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
