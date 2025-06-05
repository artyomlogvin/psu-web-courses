const router = require('express').Router();
const controller = require('./certificate.controller');
const auth = require('../../middleware/auth.middleware');

// Только для авторизованного студента
router.get('/my', auth, controller.getMyCertificates);

// Публичная проверка по коду
router.get('/verify/:code', controller.verifyCertificate);

module.exports = router;