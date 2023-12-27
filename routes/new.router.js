const express = require('express');
const news = require('../controller/new.controller')
const router = express.Router();

router.get('/', news.getAll);
router.get('/:id', news.getById);
router.post('/', news.create);
router.put('/:id', news.update);
router.delete('/:id', news.delete);

module.exports = router;