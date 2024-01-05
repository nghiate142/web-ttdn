const express = require('express');
const category = require('../controller/category.controller');
const { checkToken } = require("../controller/auth.controller");

const router = express.Router();

router.get('/', checkToken, category.getAll);
router.get('/:id', checkToken, category.getById);
router.post('/', checkToken, category.create);
router.put('/status/:id', checkToken, category.updateStatus)
router.put('/:id', checkToken, category.update);
router.delete('/:id', checkToken, category.delete);

module.exports = router;