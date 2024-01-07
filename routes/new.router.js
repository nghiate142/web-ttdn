const express = require('express');
const news = require('../controller/new.controller')
const { checkToken } = require("../controller/auth.controller");
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', news.getAll);
router.post('/', checkToken, upload.array('sections', 10), news.create);
router.get('/category-id', news.findByCategory);
router.get('/host-new/:number', news.getByHostNew)
router.get('/:id', news.getById);
router.put('/:id', checkToken, news.update);
router.delete('/:id', checkToken, news.delete);

module.exports = router;