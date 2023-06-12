import styled from 'styled-components';
import { MaxWidth } from '../../styles/styledGlobal';

export const Footer = styled.footer`
  height: 150px;
  color: black;
  min-width: 100%;
  padding: 0.5rem 2rem;
  background-color: ${({ theme }) => theme.color.first5Alpha};
`;
export const Description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgFooter = styled.img`
  width: 100px;
`;


export const ContainerMaxWidth = styled.div`
  ${MaxWidth}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`;
