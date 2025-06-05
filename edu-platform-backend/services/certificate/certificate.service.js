const Certificate = require('../../models/certificate.model');

exports.getByUser = async (userId) => {
  return await Certificate.findAll({
    where: { user_id: userId },
    order: [['issue_date', 'DESC']]
  });
};

exports.verify = async (code) => {
  return await Certificate.findOne({
    where: { verification_code: code }
  });
};