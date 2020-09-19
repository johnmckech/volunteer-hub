const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/login', require('./login'));
router.use('/register', require('./register'));

///////////

router.post("/volunteer", (req, res)=>{
  console.log("in volunteer file")
  res.send("hello")
})

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}
 
router.get('/api/volunteers/getAll', isAuthenticated, function(req, res, next) { 
  res.sendFile(isAuthenticated());
});





module.exports = router;