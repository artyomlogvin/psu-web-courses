import { useEffect, useState } from 'react';
import API from '../api/api';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get('/users/profile').then(res => setUser(res.data)).catch(() => alert("Ошибка профиля"));
  }, []);

  if (!user) return <p>Загрузка...</p>;

  return (
    <div>
      <h2>Профиль</h2>
      <p><strong>Имя:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}