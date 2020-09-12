const router = require('express').Router();
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user.js');

// router.get('/', (req, res) => {
//     res.send('hello')
// })

router.post('/', (req, res) => {
    console.log("creating user")
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    console.log(req.body)
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
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
  
router.get('/success', (req, res) => {
    res.send('success')
    console.log("it worked")
})

// router.post('/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/users/' + req.user.username);
//   });

router.post('/login',
  passport.authenticate('local', { successRedirect: '/admin',
                                   failureRedirect: '/',
                                   })
  );

module.exports = router;