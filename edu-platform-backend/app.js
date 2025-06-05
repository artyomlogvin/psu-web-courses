const express = require('express');
const cors = require('cors');

const userRoutes = require('./services/user/user.routes');
const enrollmentRoutes = require('./services/enrollment/enrollment.routes');
const courseRoutes = require('./services/course/course.routes');
const certificateRoutes = require('./services/certificate/certificate.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/certificates', certificateRoutes);

module.exports = app;