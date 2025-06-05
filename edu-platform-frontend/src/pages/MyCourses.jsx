import { useState, useEffect } from 'react';
import API from '../api/api';

export default function MyCourses() {
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    API.get('/enrollments/my')
      .then(res => setMyCourses(res.data))
      .catch(() => alert('Ошибка загрузки ваших курсов'));
  }, []);

  if (!myCourses.length) return <p>Вы пока не записаны на курсы.</p>;

  return (
    <div>
      <h2>Мои курсы</h2>
      <ul>
        {myCourses.map(enroll => (
          <li key={enroll.id}>Курс #{enroll.course_id}, прогресс: {enroll.progress}%</li>
        ))}
      </ul>
    </div>
  );
}