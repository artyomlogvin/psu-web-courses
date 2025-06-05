import { useEffect, useState } from 'react';
import API from '../api/api';
import CourseCard from '../components/CourseCard';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get('/courses').then(res => setCourses(res.data));
  }, []);

  const enroll = (courseId) => {
    API.post('/enrollments/enroll', { courseId })
      .then(() => alert('Вы успешно записались на курс!'))
      .catch(() => alert('Ошибка записи'));
  };

  return (
    <div>
      <h2>Все курсы</h2>
      {courses.map(course => (
        <CourseCard key={course.id} course={course} onEnroll={enroll} />
      ))}
    </div>
  );
}