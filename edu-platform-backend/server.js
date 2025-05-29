require('dotenv').config();
const app = require('./app');
const db = require('./models');

const PORT = process.env.PORT || 3000;

db.sequelize.authenticate()
  .then(() => {
    console.log('✅ Подключение к БД успешно');
    return db.sequelize.sync(); // при необходимости: { force: true }
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Сервер слушает на http://localhost:${PORT}`);
    });
  })
  .catch(console.error);