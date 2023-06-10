import logo from '../../assets/logofooter.png';
import { NavLinkStyled } from '../Navbar/styled';
import { Description, Footer, ImgFooter } from './styled';
const date = new Date();
const year = date.getFullYear();
const Index = () => {
    return (
      <Footer>
        {/*<h3>Compartilhe seu conhecimento!</h3>*/}
        <Description>
          <ImgFooter src={logo} alt='logo' /> &copy; {year}
        </Description>

        <NavLinkStyled
          aria-label='sobre'
          to='/about'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Sobre
        </NavLinkStyled>
      </Footer>
    );
};

export default Index;
