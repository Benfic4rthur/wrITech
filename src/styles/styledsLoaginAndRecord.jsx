import styled from 'styled-components';
// import { theme } from '../theme';

// const { color, font, border } = theme;

export const InputError = styled.label`
  color: #f15856 /* ${({theme}) => theme.color.error} */;
  font-family: ${({theme}) => theme.font.family.roboto};
  padding-inline: 2rem;
  font-size: ${({theme}) => theme.font.size.xs};
  line-height: ${({theme}) => theme.font.lineHeight};
`;

export const ContainerForm = styled.section`
  height: fit-content;
  width: min(100%, 36rem);
  display: flex;
  padding: 3rem 2rem min(15vh, 4rem);
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  gap: 3.6rem;
  border-radius: ${({theme}) => theme.border.radius};

  background-color: hsla(0, 0%, 90%, 0.29);
`;

export const Form =
styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.4rem;
`;

export const ButtonForm = styled.button`
  background-color: #095c85;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  width: 120px;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  font-size: 1.6rem;
  transition: 0.8s;

  &:hover {
    background-color: hsl(198, 97%, 17%);
    color: hsl(0, 0%, 100%);
    transition: 0.5s;
    border-radius: 10px;
  }

  &:disabled {
    background-color: hsl(198, 97%, 10%);
  }
  :focus {
    outline: 2px solid ${({theme}) => theme.color.fourth};
    outline-offset: 3px;
  }
  :hover {
    text-decoration: underline;
  }
`;

export const jhh = styled.p`
  padding: 0.8rem;
  font-size: 1.2rem;
  color: 'hsl(59, 100%, 76%)';
  border-radius: 1rem;
  background: hsl(0, 80%, 90%);
`;
export const Error = styled.p`
  padding: 0.8rem;
  font-size: 1.2rem;
  color: hsl(0, 50%, 50%);
  border-radius: 1rem;
  background: hsl(0, 80%, 90%);
`;

// export const Description = styled.p`
//   color: ${({theme}) => theme.color.fourth};
//   font-size: ${({theme}) => theme.font.size.sm};
//   font-weight: 400;
//   font-family: ${({theme}) => theme.font.family.robotoSlab};
//   line-height: ${({theme}) => theme.font.lineHeight};
// `;

// export const Logo2xl = styled.h2`
//   width: 100%;
//   font-weight: 700;
//   color: ${({theme}) => theme.color.first};
//   font-family: ${({theme}) => theme.font.family.robotoSlab};
//   font-size: clamp(3rem, 4.5vw, ${({theme}) => theme.font.size['2xl']});
//   line-height: ${({theme}) => theme.font.lineHeight};
// `;

// export const Subtitle = styled.h2`
//   color: ${({theme}) => theme.color.third};
//   font-size: ${({theme}) => theme.font.size.lg};
//   line-height: ${({theme}) => theme.font.lineHeight};
//   font-family: ${({theme}) => theme.font.family.robotoSlab};
//   font-weight: 500;
// `;

// export const ContainerScrollbar = styled.div`
//   height: 100vh;

//   overflow: overlay;

//   ::-webkit-scrollbar {
//     width: 0.8rem;
//   }

//   ::-webkit-scrollbar-track {
//     background: transparent;
//   }

//   ::-webkit-scrollbar-thumb {
//     background: ${({theme}) => theme.color.first};
//     border-radius: ${({theme}) => theme.border.radius};
//   }

//   ::-webkit-scrollbar-thumb:hover {
//     background: ${({theme}) => theme.color.firstHover};
//   }
// `;

// export const ContainerMain = styled.main`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
// `;


// export const ContainerInput = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 0.8rem;
// `;

// export const ContainerLink = styled.div`
//   border-radius: ${({theme}) => theme.border.radius};
//   align-items: center;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const ContainerImg = styled.div`
//   width: 55%;
//   background-color: ${({theme}) => theme.color.first5Alpha};
//   display: block;
//   align-items: center;
//   overflow: hidden;
//   position: relative;

//   @media (max-width: 720px) {
//     display: none;
//     height: auto;
//   }
// `;

// export const Input = styled.input`
//   width: 100%;
//   height: 5.2rem;
//   border-radius: 1rem;
//   padding: 1.6rem;
//   outline: none;
//   background-color: ${({theme}) => theme.color.secondBg};
//   color: ${({theme}) => theme.color.fourthBg};
//   font-family: ${({theme}) => theme.font.family.robotoSlab};
//   line-height: ${({theme}) => theme.font.lineHeight};

//   :focus {
//     outline: 2px solid ${({theme}) => theme.color.first};
//     outline-offset: 3px;
//   }

//   ::placeholder,
//   ::-webkit-input-placeholder {
//     color: ${({theme}) => theme.color.second};
//   }
//   :-ms-input-placeholder {
//     color: ${({theme}) => theme.color.second};
//   }
// `;


// export const Img = styled.img`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   min-width: 100%;
//   min-height: 100%;
//   height: auto;
//   width: auto;
// `;

// export const ContainerError = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   width: 100%;
// `;
