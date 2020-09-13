const path = require('path');
const router = require('express').Router();
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
// const Volunteer = require('../models/volunteers.js');

  router.get('/success', (req, res) => {
    res.send('success')
    console.log("it worked")
})

router.post('/login',
  passport.authenticate('local', { successRedirect: '/login/success',
                                   failureRedirect: '/',
                                   })
  );

module.exports = router;