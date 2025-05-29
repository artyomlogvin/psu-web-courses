const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Enrollment = sequelize.define('Enrollment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  course_id: { type: DataTypes.INTEGER, allowNull: false },
  progress: { type: DataTypes.INTEGER, defaultValue: 0 },
  is_completed: { type: DataTypes.BOOLEAN, defaultValue: false },
  enrolled_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  completed_at: { type: DataTypes.DATE }
}, {
  tableName: 'enrollments',
  timestamps: false
});

module.exports = Enrollment;