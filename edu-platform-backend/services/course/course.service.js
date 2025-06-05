const Course = require('../../models/course.model');
const Module = require('../../models/module.model');
const Lesson = require('../../models/lesson.model');

exports.getAll = async (filter = {}) => {
  const where = {};
  if (filter.difficulty) where.difficulty = filter.difficulty;

  return Course.findAll({
    where,
    include: [{ model: Module, include: [Lesson] }]
  });
};

exports.getById = async (id) => {
  return Course.findByPk(id, {
    include: [{ model: Module, include: [Lesson] }]
  });
};

exports.create = async ({ title, description, teacher_id, difficulty, thumbnail_url }) => {
  return await Course.create({ title, description, teacher_id, difficulty, thumbnail_url });
};

exports.update = async (id, updates) => {
  const course = await Course.findByPk(id);
  if (!course) throw new Error('Course not found');
  await course.update(updates);
  return course;
};