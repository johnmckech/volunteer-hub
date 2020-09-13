const express = require('express');
const router = express.Router();

router.use('/volunteers', require('./volunteerRoutes'));
router.use(require('./opportunityRoutes'));

module.exports = router;