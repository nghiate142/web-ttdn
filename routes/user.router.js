const express = require('express');
const users = require('../controller/user.controller');
const { checkToken } = require("../controller/auth.controller");

const router = express.Router();

router.get('/', checkToken, users.getAll);
router.get('/:id', checkToken, users.getById);
router.post('/', checkToken, users.create);
router.put('/:id', checkToken, users.update);
router.delete('/:id', checkToken, users.delete);

module.exports = router;