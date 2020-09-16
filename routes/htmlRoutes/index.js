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






module.exports = router;