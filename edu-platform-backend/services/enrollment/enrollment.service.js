const Enrollment = require('../../models/enrollment.model');
const Certificate = require('../../models/certificate.model');
const { v4: uuidv4 } = require('uuid');

exports.enroll = async (userId, courseId) => {
  return await Enrollment.create({ user_id: userId, course_id: courseId });
};

exports.getUserEnrollments = async (userId) => {
  return await Enrollment.findAll({ where: { user_id: userId } });
};

exports.updateProgress = async (id, progress) => {
  const enrollment = await Enrollment.findByPk(id);
  if (!enrollment) throw new Error('Не найден');

  enrollment.progress = progress;

  if (progress >= 100 && !enrollment.is_completed) {
    enrollment.is_completed = true;
    enrollment.completed_at = new Date();

    await Certificate.create({
      user_id: enrollment.user_id,
      course_id: enrollment.course_id,
      certificate_url: `https://certs.local/${uuidv4()}.pdf`,
      verification_code: uuidv4()
    });
  }

  await enrollment.save();
  return enrollment;
};