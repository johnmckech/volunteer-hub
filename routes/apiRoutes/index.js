const express = require('express');
const router = express.Router();

router.use('/volunteers', require('./volunteerRoutes'));
router.use('/opportunities', require('./opportunityRoutes', './htmlRoutes/login'));

module.exports = router;