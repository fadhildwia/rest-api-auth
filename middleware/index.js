const express = require('express');
const auth = require('./auth');
const verification = require('./verification');
const router = express.Router();

//daftarkan menu registration
router.post('/api/v1/register', auth.registration);
router.post('/api/v1/login', auth.login);

//alamat yang perlu otorisasi
router.get('/api/v1/secret', verification(), auth.secretpage);

module.exports = router;