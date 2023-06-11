import { createGlobalStyle } from 'styled-components';
// import { containerStyleBody } from './styles/styledGlobal';

export const GlobalStyle = createGlobalStyle`
   * {
      margin:0;
      border: none;
      padding:0;
      outline: none;
      box-sizing: border-box;
      transition: 0;
      &:focus{
         outline:  ${({ theme }) => theme.color.first} solid 2px ;
         outline-offset: .3rem;
      }
   }
   html {
      font-size: 62.5%;
      width: 100%;
      min-height: 100vh;
      height: 100%;
      background-color:  ${({ theme }) => theme.color.fourthBg};
   }
   body {
      width: 100%;
      font-family: ${({ theme }) => theme.font.family.roboto};
      min-height: 100vh;
      height: 100%;
   }
`;
