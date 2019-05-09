const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        age:req.body.age,
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);

  if(!isValid) {
      return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
      .then(user => {
          if(!user) {
              errors.email = 'User not found'
              return res.status(404).json(errors);
          }
          bcrypt.compare(password, user.password)
                  .then(isMatch => {
                      if(isMatch) {
                          const payload = {
                              id: user.id,
                              name: user.name,
                              avatar: user.avatar
                          }
                          jwt.sign(payload, 'secret', {
                              expiresIn: 3600
                          }, (err, token) => {
                              if(err) console.error('There is some error in token', err);
                              else {
                                  res.json({
                                      success: true,
                                      token: `Bearer ${token}`
                                  });
                              }
                          });
                      }
                      else {
                          errors.password = 'Incorrect Password';
                          return res.status(400).json(errors);
                      }
                  });
      });
});

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
  });
});


          


module.exports = router;
