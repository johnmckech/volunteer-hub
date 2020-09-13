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

router.get('/', isAuthenticated, function(req, res, next) { 
  res.sendFile(path.join(__dirname, 'public'));
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}
 


module.exports = router;