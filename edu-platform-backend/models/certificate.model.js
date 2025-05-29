const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Certificate = sequelize.define('Certificate', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  course_id: { type: DataTypes.INTEGER, allowNull: false },
  issue_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  certificate_url: { type: DataTypes.STRING },
  verification_code: { type: DataTypes.STRING, unique: true }
}, {
  tableName: 'certificates',
  timestamps: false
});

module.exports = Certificate;