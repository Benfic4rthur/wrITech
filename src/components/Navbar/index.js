import { NavLink } from 'react-router-dom';
import styles from './style.module.css';
import { UseAuthentication } from '../../hooks/useAuthentication';
import { UseAuthValue } from '../../context/AuthContext';
// importa botão de logout do material design
import { MdLogout } from 'react-icons/md';

const index = () => {
  const { user } = UseAuthValue();
  const { logout } = UseAuthentication();
  return (
    <nav className={styles.navbar}>
      <NavLink to='/' className={styles.brand}>
        wr<span style={{ color: '#ccc' }}>IT</span>ech
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : '')}>
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to='/login' className={({ isActive }) => (isActive ? styles.active : '')}>
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink to='/register' className={({ isActive }) => (isActive ? styles.active : '')}>
                Cadastro
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to='/dashboard'
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/create-post'
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Novo Post
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : '')}>
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink onClick={logout} className={({ isActive }) => styles.Lo}>
              <MdLogout />
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default index;
