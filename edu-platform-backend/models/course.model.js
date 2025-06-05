const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Course = sequelize.define('Course', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  teacher_id: { type: DataTypes.INTEGER, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  thumbnail_url: { type: DataTypes.STRING },
  difficulty: { type: DataTypes.STRING } // например: 'beginner', 'intermediate', 'advanced'
}, {
  tableName: 'courses',
  timestamps: false
});

module.exports = Course;