const sequelize = require('../config/database');
const User = require('./user.model');
const Enrollment = require('./enrollment.model');
const Certificate = require('./certificate.model');
const Course = require('./course.model');
const Module = require('./module.model');
const Lesson = require('./lesson.model');

Course.hasMany(Module, { foreignKey: 'course_id' });
Module.belongsTo(Course, { foreignKey: 'course_id' });

Module.hasMany(Lesson, { foreignKey: 'module_id' });
Lesson.belongsTo(Module, { foreignKey: 'module_id' });

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Enrollment = Enrollment;
db.Certificate = Certificate;
db.Course = Course;
db.Module = Module;
db.Lesson = Lesson;

module.exports = db;