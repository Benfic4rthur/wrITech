import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const containerStyleBody = css`
  background-image: linear-gradient(120.21deg, #888f93 11.18%, #0c6870 74.17%);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  margin: 0;
  width: 100%;
  font-family: ${({ theme }) => theme.font.family.roboto};
  min-height: 100vh;
  height: 100%;
  /* overflow-x: hidden; */
`;

export const ContainerHidden = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto min-content;
`;

export const MaxWidth = css`
  margin: 0 auto;
  height: 100%;
  width: min(100%, 141rem);

`;

export const Main = styled.main`
  ${MaxWidth}
  padding-block: 4rem;
  padding-inline: min(5vw, 3rem);
`;

export const ContainerCenter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const CreatePostButton = styled.a`
  color: ${({ theme }) => theme.color.fourth};
  background-color: ${({ theme }) => theme.color.first5Alpha};
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.base};
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: 2px 2px 5px ${({ theme }) => theme.color.shadow};
  padding: 1.5rem 3rem;
  transition: 300ms;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  transition: 300ms color, 300ms background-color;

  &:hover {
    color: ${({ theme }) => theme.color.firstHover};
    background-color: ${({ theme }) => theme.color.third};
  }
`;


export const SearchForm = styled.form`
  width: 100%;
  max-width: 40rem;
  height: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 6rem;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.color.shadow};
  border-radius: ${({ theme }) => theme.border.radius};
`;
export const SearchInput = styled.input`
  min-width: 100%;
  border-bottom-left-radius: ${({ theme }) => theme.border.radius};
  border-top-left-radius: ${({ theme }) => theme.border.radius};
  padding: 1.8rem 1.8rem 1.8rem 2.3rem;
  background-color: ${({ theme }) => theme.color.fourth};
`;

export const SearchButton = styled.button`
  font-size: ${({ theme }) => theme.font.size.lg};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-bottom-right-radius: ${({ theme }) => theme.border.radius};
  border-top-right-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.color.fifth};
  color: ${({ theme }) => theme.color.fourth};
`;


export const ContainerElements = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content auto;
  gap: 3rem;
`;

export const ContainerPost = styled.section`
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: center;
`;

export const PostsNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

export const PostsNotFoundTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.color.thirdBg};
`;



// --------------------- //

export const MaxWidthScrollbar = styled.div`
  width: 100%;

  overflow: overlay;

  &::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.first};
    border-radius: ${({ theme }) => theme.border.radius};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.firstHover};
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.third};
  font-size: ${({ theme }) => theme.font.size.xl};
  line-height: ${({ theme }) => theme.font.lineHeight};
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-weight: 500;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.color.third};
  font-size: ${({ theme }) => theme.font.size.lg};
  line-height: ${({ theme }) => theme.font.lineHeight};
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-weight: 500;
`;

export const TextLink = styled(Link)`
  color: ${({ theme }) => theme.color.first};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: 400;
  line-height: ${({ theme }) => theme.font.lineHeight};
  font-family: ${({ theme }) => theme.font.family.robotoSlab};
  text-decoration: none;
  width: max-content;
  display: flex;
  align-items: center;

  gap: 0.8rem;

  :focus {
    text-decoration: underline;
  }
`;

export const ButtonProportions = styled.button`
  border-radius: ${({ theme }) => theme.border.radius};
  height: 5.6rem;
  display: flex;
  justify-content: center;
  line-height: ${({ theme }) => theme.font.lineHeight};
  cursor: pointer;

  align-items: center;
`;

export const Button = styled(ButtonProportions)`
  width: 100%;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.color.first};
  color: ${({ theme }) => theme.color.secondBg};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: 500;
  font-family: ${({ theme }) => theme.font.family.robotoSlab};

  :focus {
    outline: 2px solid ${({ theme }) => theme.color.fourth};
    outline-offset: 3px;
  }
`;

export const ButtonSmall = styled.button`
  height: 4.8rem;
  width: 100%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.first};

  color: ${({ theme }) => theme.color.secondBg};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: 400;
  font-family: ${({ theme }) => theme.font.family.robotoSlab};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export const ImgCover = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
