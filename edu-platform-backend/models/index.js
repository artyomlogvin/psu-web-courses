const sequelize = require('../config/database');
const User = require('./user.model');
const Enrollment = require('./enrollment.model');
const Certificate = require('./certificate.model');

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Enrollment = Enrollment;
db.Certificate = Certificate;

module.exports = db;