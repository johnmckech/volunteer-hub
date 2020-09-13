const path = require('path');
const router = require('express').Router();

router.post("/volunteer", (req, res)=>{
  console.log("in volunteer file")
  res.send("volunteer hello!")
});

router.post("/opportunties", (req, res) => {
  console.log("in opportunities file")
  res.send("opportunities hello!")
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public'));
});

router.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/admin.html'));
});

// router.get('/zookeepers', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
// });

module.exports = router;