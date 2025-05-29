const router = require('express').Router();
const controller = require('./enrollment.controller');
const auth = require('../../middleware/auth.middleware');

router.post('/enroll', auth, controller.enroll);
router.get('/my', auth, controller.myEnrollments);
router.put('/progress', auth, controller.updateProgress);

module.exports = router;