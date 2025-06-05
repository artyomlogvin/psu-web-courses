import { useState } from 'react';
import API from '../api/api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/users/login', form);
      localStorage.setItem('token', res.data.token);
      window.location.href = '/profile';
    } catch (err) {
      alert('Ошибка входа');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Вход</h2>
      <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} /><br />
      <input type="password" placeholder="Пароль" onChange={e => setForm({ ...form, password: e.target.value })} /><br />
      <button type="submit">Войти</button>
    </form>
  );
}