const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/hello', mainController.hello);
router.post('/login', mainController.login);

module.exports = router;
