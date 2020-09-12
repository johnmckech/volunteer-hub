const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public'));
});

router.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../../admin.html'));
});

// router.get('/zookeepers', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
// });

module.exports = router;