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

export const MaxWidth = styled.main`
  margin: 0 auto;
  height: 100%;
  width: min(100%, 141rem);
  padding-block: 4rem;
  padding-inline: min(7vw, 8rem);
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
  padding: 1.5rem 3rem;
  transition: 300ms;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.color.firstHover};
    background-color: ${({ theme }) => theme.color.third};
  }
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
