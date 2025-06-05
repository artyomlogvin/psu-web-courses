import { Link } from 'react-router-dom';

export default function Navbar() {
  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/">Главная</Link> |{' '}
      <Link to="/courses">Курсы</Link> |{' '}
      {token ? (
        <>
          <Link to="/profile">Профиль</Link> |{' '}
          <Link to="/my-courses">Мои курсы</Link> |{' '}
          <button onClick={logout}>Выйти</button>
        </>
      ) : (
        <>
          <Link to="/login">Вход</Link> |{' '}
          <Link to="/register">Регистрация</Link>
        </>
      )}
    </nav>
  );
}