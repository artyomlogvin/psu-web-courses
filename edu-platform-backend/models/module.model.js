const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Module = sequelize.define('Module', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  level_id: { type: DataTypes.INTEGER },
  course_id: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  is_required: { type: DataTypes.BOOLEAN, defaultValue: true },
  sequence: { type: DataTypes.INTEGER, defaultValue: 1 }
}, {
  tableName: 'modules',
  timestamps: false
});

module.exports = Module;