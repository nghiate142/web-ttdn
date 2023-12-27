const express = require('express');
const category = require('../controller/category.controller');

const router = express.Router();

router.get('/', category.getAll);
router.get('/:id', category.getById);
router.post('/', category.create);
router.put('/:id', category.update);
router.delete('/:id', category.delete);

module.exports = router;