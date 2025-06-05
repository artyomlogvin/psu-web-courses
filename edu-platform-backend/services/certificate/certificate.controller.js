const service = require('./certificate.service');

exports.getMyCertificates = async (req, res) => {
  try {
    const certs = await service.getByUser(req.user.userId);
    res.json(certs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.verifyCertificate = async (req, res) => {
  try {
    const code = req.params.code;
    const cert = await service.verify(code);
    if (!cert) return res.status(404).json({ error: 'Сертификат не найден' });
    res.json(cert);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};