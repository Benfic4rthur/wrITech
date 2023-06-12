import styled, { css } from 'styled-components';

export const ContainerPost = styled.a`
  height: fit-content;
  width: 100%;
  max-width: 36rem;

  padding: 3rem 2rem 1.7rem;
  display: grid;
  grid-template-columns: 7;
  gap: 0.7rem;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.color.thirdOpacity03};
  box-shadow: 2px 2px 5px ${({ theme }) => theme.color.shadow};
  transition: 300ms background-color;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.first5Alpha};
  }
`;

const MidiaStyled = css`
  width: 100%;
  height: 18rem;
  overflow: hidden;
  object-fit: cover;
  object-position: center center;
  border-radius: ${({ theme }) => theme.border.radius};
  &:hover {
    transform: scale(1.05);
  }
`;

export const ContainerMidia = styled.div`
  background-color: ${({ theme }) => theme.color.first5Alpha};
  ${MidiaStyled}
`;

export const Image = styled.img`
  ${MidiaStyled}
`;

export const Video = styled.video`
  ${MidiaStyled}
`;

export const Tag = styled.div`
  padding: 0.6rem 1.2rem;
  height: 2.53rem;
  width: fit-content;
  font-size: 1.1rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.thirdBg};
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.color.first5Alpha};
`;

export const ContainerTag = styled.div`
  display: flex;
  /* flex-wrap: wrap;
  flex-direction: row; */
  padding-bottom: 0.5rem;
  height: 4rem;

  overflow-x: auto;
  gap: 0.5rem;

  /* overflow: overlay; */

  &::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.first5Alpha};
    border-radius: ${({ theme }) => theme.border.radius};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.secondBg};
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.color.thirdBg};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Author = styled.h3`
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.color.thirdBg};
`;
