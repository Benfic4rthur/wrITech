import styled from 'styled-components';

export const Footer = styled.footer`
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: black;
  width: 100%;
  padding-inline: 5%;
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
