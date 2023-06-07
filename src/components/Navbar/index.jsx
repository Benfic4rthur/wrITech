import { NavLink } from 'react-router-dom';
import styles from './style.module.css';
import { UseAuthentication } from '../../hooks/useAuthentication';
import { UseAuthValue } from '../../context/AuthContext';
import { MdLogout } from 'react-icons/md';
import logo from '../../assets/writech.png';
import { useUserInfo } from '../../hooks/userName';

const index = () => {
  const { user } = UseAuthValue();
  const { logout } = UseAuthentication();
  const userEmail = user ? user.email : '';
  const userName = useUserInfo(userEmail);

  return (
    <nav className={styles.navbar}>
      <NavLink to='/' className={styles.brand}>
        <img src={logo} alt='logo' />
      </NavLink>
      {user && <p>Logado como: {userName}</p>}

      <ul className={styles.links_list}>
        {!user && (
          <>
            <li title='catalog'>
              <NavLink
                to='/catalog'
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Catalog
              </NavLink>
            </li>
            <li title='entrar'>
              <NavLink to='/login' className={({ isActive }) => (isActive ? styles.active : '')}>
                Entrar
              </NavLink>
            </li>
            <li title='cadastrar'>
              <NavLink
                to='/register'
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Cadastro
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li title='home'>
              <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : '')}>
                Home
              </NavLink>
            </li>
            <li title='catalog'>
              <NavLink
                to='/catalog'
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Catalog
              </NavLink>
            </li>
            <li title='novo post'>
              <NavLink
                to='/create-post'
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Novo Post
              </NavLink>
            </li>
            <li title='dashboard'>
              <NavLink
                to='/dashboard'
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li title='sobre'>
          <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : '')}>
            Sobre
          </NavLink>
        </li>
        {user && (
          <li title='Logout'>
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
