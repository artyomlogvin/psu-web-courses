const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/user.model');
require('dotenv').config();

exports.register = async ({ username, email, password }) => {
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password_hash: hash });
  return user;
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('Пользователь не найден');

  const isValid = await bcrypt.compare(password, user.password_hash);
  if (!isValid) throw new Error('Неверный пароль');

  const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

exports.getProfile = async (userId) => {
  return await User.findByPk(userId, {
    attributes: ['id', 'username', 'email', 'created_at']
  });
};