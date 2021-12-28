const express = require('express');
const auth = require('./auth');
const router = express.Router();

//daftarkan menu registration
router.post('/api/v1/register', auth.registration);

module.exports = router;