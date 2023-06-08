import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
// import { theme } from '../../theme';

export const Header = styled.header`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.24) 0px -3px 10px 0px;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  padding: 0.5em 2em;
  background-color: transparent;
`;

export const Nav = styled.nav`
  height: min-content;
  width: fit-content;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 140px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.third};
  font-size: ${({ theme }) => theme.font.size.base};
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.border.radius};
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    background-color: ${({ theme }) => theme.color.thirdOpacity03};
    color: ${({ theme }) => theme.color.first};
  }

  &.active:hover, &:hover {
    color: ${({ theme }) => theme.color.firstHover};
    background-color: ${({ theme }) => theme.color.first5Alpha};
  }
`;

/* .navbar {

}

.brand img {
    width: 140px;
}

.brand span {
    font-weight: 900;
    text-transform: uppercase;
}

.links_list {
    display: flex;
    list-style: none;
}

.links_list li {
    margin-right: .01em;
    text-decoration: none;
}

.links_list li a {
    padding: 0.4em 0.6em;
}

.active {
    background-color: inherit;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.176);
    color: aliceblue;
    border-radius: 25px;
}

.Lo {
    color: aliceblue;
    display: flex;
    margin-top: -4px;
    justify-content: center;
}

.nomeUsuario {
    margin-top: -2.9em;
    text-align: left;
    width: 200px;
    margin-left: 146px;
    height: 18px;
    transition: .5s;
}

.nomeUsuario:hover {
    cursor: pointer;
    filter: drop-shadow(1px 2px 10px rgb(80, 73, 84));
    transition: .5s;
}

.nomeUsuario span {
    color: rgb(43, 43, 43);
    font-weight: bold;
} */
