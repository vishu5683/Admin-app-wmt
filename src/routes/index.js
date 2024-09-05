const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');

// Use authentication routes
router.use(authRoutes);

module.exports = router;
