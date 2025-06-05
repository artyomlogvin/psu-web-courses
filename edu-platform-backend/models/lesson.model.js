const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Lesson = sequelize.define('Lesson', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  module_id: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  sequence: { type: DataTypes.INTEGER },
  duration_minutes: { type: DataTypes.INTEGER },
  video_url: { type: DataTypes.STRING }
}, {
  tableName: 'lessons',
  timestamps: false
});

module.exports = Lesson;