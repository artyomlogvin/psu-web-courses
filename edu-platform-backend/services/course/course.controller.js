const service = require('./course.service');

exports.list = async (req, res) => {
  try {
    const courses = await service.getAll(req.query);
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const course = await service.getById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Курс не найден' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const teacher_id = req.user.userId; // предполагается, что teacher авторизован
    const { title, description, difficulty, thumbnail_url } = req.body;
    const course = await service.create({ title, description, difficulty, thumbnail_url, teacher_id });
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const course = await service.update(req.params.id, req.body);
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};