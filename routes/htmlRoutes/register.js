const path = require('path');
const router = require('express').Router();
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const Volunteer = require('../../models/volunteers.js');


router.get('/', (req, res) => {
  res.json({test: 'hello'})
})

router.post('/', (req, res) => {
    console.log("creating user")
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    console.log(req.body)
    Volunteer.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      languages: JSON.stringify(req.body.languages),
      techKnowledge:JSON.stringify( req.body.techKnowledge),
      specialKnowledge: JSON.stringify(req.body.specialKnowledge),
      HoursPerWeek: req.body.HoursPerWeek,
    })
      .then(dbUserData => {
        console.log(dbUserData);
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
          console.log("it worked");
          res.json(dbUserData);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

  module.exports = router;