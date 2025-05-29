const service = require('./enrollment.service');

exports.enroll = async (req, res) => {
  try {
    const result = await service.enroll(req.user.userId, req.body.courseId);
    res.json({ message: 'Записан', result });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.myEnrollments = async (req, res) => {
  try {
    const result = await service.getUserEnrollments(req.user.userId);
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateProgress = async (req, res) => {
  try {
    const { enrollmentId, progress } = req.body;
    const result = await service.updateProgress(enrollmentId, progress);
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};