const express = require('express');
const auth = require('../controller/auth.controller')

const router = express.Router();

router.post('/login', auth.checkToken, auth.login);
router.post('/logout', auth.checkToken, auth.logout);

module.exports = router;