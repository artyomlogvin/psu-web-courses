const service = require('./user.service');

exports.register = async (req, res) => {
  try {
    const user = await service.register(req.body);
    res.status(201).json({ message: 'Пользователь создан', userId: user.id });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await service.login(req.body);
    res.json({ token });
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
};

exports.profile = async (req, res) => {
  try {
    const profile = await service.getProfile(req.user.userId);
    res.json(profile);
  } catch (e) {
    res.status(500).json({ error: 'Ошибка получения профиля' });
  }
};