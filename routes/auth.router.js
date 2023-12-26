const express = require('express');
const auth = require('../controller/auth.controller')

const router = express.Router();

router.post('/auth', auth.login);

module.exports = router;