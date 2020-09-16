const router = require('express').Router();
const passport = require('passport')

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}
 
router.get('/success', isAuthenticated, function(req, res, next) { 
  res.sendFile(isAuthenticated());
});

// router.get('/success', (req, res) => {
//     res.send('success')
//     console.log("it worked")
// })

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     console.log('Attempting to login..')
//     Volunteer.findOne(
//       {
//         where: {
//            username: username,
//            password: password 
//         }
//       }).then(volunteer => {
//       if (!volunteer) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       console.log(volunteer.password + ' vs ' + password)
//       if (!volunteer.checkPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       done(null, volunteer);
//     }).catch(err => {
//       console.log(err);
//       done(err)
//     });
//   }
// ));

// passport.use(new LocalStrategy({
//     usernameField: '',
//     passwordField: ''
// },
//   function(username, password, done) {
//     Volunteer.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));



// router.post('/', (req, res, next) => {
//   passport.authenticate('local',
//   (err, user, info) => {
//     if (err) {
//       return next(err);
//     }

//     if (!user) {
//       return res.redirect('/login?info=' + info);
//     }

//     req.logIn(user, function(err) {
//       if (err) {
//         return next(err);
//       }

//       return res.redirect('/success');
//     });

//   })(req, res, next);
// });

router.post('/',
  passport.authenticate('local', { successRedirect: '/login/success',
                                   failureRedirect: '/'
                                   }))
  

module.exports = router, passport;