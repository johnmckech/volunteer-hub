const router = require('express').Router();
const passport = require('passport')


 
router.get('/success', checkAuthentication, function(req, res, next) { 
  res.send("Success!");
});


// router.get('/success', (req, res) => {
//     res.send('success')
//     console.log("it worked")
// })



router.post('/',
  passport.authenticate('local', { successRedirect: '/login/success',
                                   failureRedirect: '/'
                                   }))
  
function checkAuthentication(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

module.exports = router, passport;