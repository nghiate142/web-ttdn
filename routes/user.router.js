const express = require('express');
const users = require('../controller/user.controller');
const { checkToken } = require("../controller/auth.controller");
const middleware = require("../middleware/user.middleware")

const router = express.Router();

router.get('/', checkToken, users.getAll);
router.get('/:id', checkToken, users.getById);
router.post('/',middleware.validateUserDataCreate, users.create);
router.put('/:id',middleware.validateUserDataUpdate, checkToken, users.update);
router.delete('/:id', checkToken, users.delete);

module.exports = router;