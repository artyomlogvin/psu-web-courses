const router = require('express').Router();
const controller = require('./user.controller');
const auth = require('../../middleware/auth.middleware');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/profile', auth, controller.profile);

module.exports = router;