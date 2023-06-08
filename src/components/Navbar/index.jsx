import { MdLogout } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/writech.png';
import { UseAuthValue } from '../../context/AuthContext';
import { UseAuthentication } from '../../hooks/useAuthentication';
import { useUserInfo } from '../../hooks/userName';
import  { Header, Logo, Nav,NavLinkStyled } from './styled.js';

const index = () => {
  const { user } = UseAuthValue();
  const { logout } = UseAuthentication();
  const userEmail = user ? user.email : '';
  const userName = useUserInfo(userEmail);

  return (
    <Header>
      <NavLink to='/'>
        <Logo src={logo} alt='logo' />
      </NavLink>

      <Nav>
        {!user && (
          <>
            <NavLinkStyled
              aria-label='Catálogo de postagens'
              to='/catalog'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Catalog
            </NavLinkStyled>
            <NavLinkStyled
              aria-label='pagina para efetuar o login'
              to='/login'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Entrar
            </NavLinkStyled>

            <NavLinkStyled
              to='/register'
              aria-label='pagina de cadastro'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Cadastro
            </NavLinkStyled>
          </>
        )}
        {user && (
          <>
            <NavLinkStyled
              aria-label='home'
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLinkStyled>

            <NavLinkStyled
              aria-label='Catálogo de postagens'
              to='/catalog'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Catalog
            </NavLinkStyled>

            <NavLinkStyled
              aria-label='novo post'
              to='/create-post'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Novo Post
            </NavLinkStyled>

            <NavLinkStyled
              aria-label='painel principal'
              to='/dashboard'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Dashboard
            </NavLinkStyled>
          </>
        )}
        <NavLinkStyled
          aria-label='sobre'
          to='/about'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Sobre
        </NavLinkStyled>
        {user && (
          <NavLinkStyled aria-label='desconectar' onClick={logout} className={() => 'Lo'}>
            <MdLogout />
          </NavLinkStyled>
        )}
      </Nav>
      {/* <div className={nomeUsuario}>{user && <span>/{userName}</span>}</div> */}
    </Header>
  );
};

export default index;
