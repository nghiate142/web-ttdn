const express = require('express');
const news = require('../controller/new.controller')
const { checkToken } = require("../controller/auth.controller");
const router = express.Router();

router.get('/', checkToken, news.getAll);
router.post('/', checkToken, news.create);
router.get('/category-id', checkToken, news.findByCategory)
router.get('/:id', checkToken, news.getById);
router.put('/:id', checkToken, news.update);
router.delete('/:id', checkToken, news.delete);

module.exports = router;