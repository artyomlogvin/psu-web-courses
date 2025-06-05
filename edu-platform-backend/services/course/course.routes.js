const router = require('express').Router();
const controller = require('./course.controller');
const auth = require('../../middleware/auth.middleware');

router.get('/', controller.list);            // GET /api/courses
router.get('/:id', controller.getById);      // GET /api/courses/:id
router.post('/', auth, controller.create);   // POST /api/courses (auth required)
router.put('/:id', auth, controller.update); // PUT /api/courses/:id (auth required)

module.exports = router;