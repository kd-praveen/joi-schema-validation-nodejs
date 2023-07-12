const express = require('express');
const router = express.Router();
const { validateSignup } = require("./validator");

// generic route handler
const genericHandler = (req, res, next) => {
  res.json({
    status: 'success',
    data: req.body
  });
};

// create a new teacher or student
router.post('/register', (req, res, next) => {
    const { error, value } = validateSignup(req.body);

    if (error) {
      console.log(error);
      return res.send(error.details);
    }
  
    res.send("Successfully signed up!");
});


module.exports = router;