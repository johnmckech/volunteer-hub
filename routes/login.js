const router = require('express').Router();
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user.js');

router.get('/', (req, res) => {
    res.send('hello')
})

router.post('/signup', (req, res) => {
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
})

router.get('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        console.log('logging in');
      if (err) { return next(err); }
      if (!user) { return res.redirect('/'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/success');
      });
    })(req, res, next);
  });

router.post('/login', function(req, res) {
    
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
    
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });
// router.post('/login',
//   passport.authenticate('local', { successRedirect: '/success',
//                                    failureRedirect: '/',
//                                    })
  

// );

// passport.use('signup', new localStrategy({
//   usernameField : 'email',
//   passwordField : 'password',
//   passReqToCallback: true
// }, async (req, email, password, done) => {
//   try {
//     const name = req.body.name;
//     const user = await User.create({ name, email, password });
//     return done(null, user);
//   } catch (error) {
//     done(error);
//   }
// }));

module.exports = router;