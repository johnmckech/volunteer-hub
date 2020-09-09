const express = require('express');
const router = express.Router();

router.use(require('./volunteerRoutes'));
router.use(require('./opportunityRoutes'));

module.exports = router;