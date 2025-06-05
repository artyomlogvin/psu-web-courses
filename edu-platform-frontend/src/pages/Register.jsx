import { useState } from 'react';
import API from '../api/api';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/users/register', form);
      alert('Регистрация прошла успешно!');
      window.location.href = '/login';
    } catch (err) {
      alert('Ошибка регистрации');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      <input placeholder="Имя пользователя" required onChange={e => setForm({ ...form, username: e.target.value })} /><br />
      <input type="email" placeholder="Email" required onChange={e => setForm({ ...form, email: e.target.value })} /><br />
      <input type="password" placeholder="Пароль" required onChange={e => setForm({ ...form, password: e.target.value })} /><br />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}