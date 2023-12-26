const express = require('express');
const users = require('../controller/user.controller');

const router = express.Router();

router.get('/', users.getAll);
router.get('/:id', users.getById);
router.post('/', users.create);
router.put('/:id', users.update);
router.delete('/:id', users.delete);

module.exports = router;