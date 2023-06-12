import styled, { css } from 'styled-components';

export const Container = styled.a`
  height: fit-content;
  width: 12rem; /* Adjusted width to fit 8 posts per line */
  background-color: ${({ theme }) => theme.color.thirdOpacity03};
  color: ${({ theme }) => theme.color.thirdBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 14.8rem;
  padding: 1.5rem;
  padding-bottom: 1rem;
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: 2px 2px 5px ${({ theme }) => theme.color.shadow};
  text-decoration: none;
  transition: 300ms background-color, 300ms color, 300ms text-decoration;

  &:hover {
    background-color: ${({ theme }) => theme.color.first5Alpha};
    color: ${({ theme }) => theme.color.firstHover};
    transform: scale(1.1);
    /* text-decoration: underline; */
  }
`;

const MidiaStyled = css`
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  border-radius: ${({theme})=>theme.border.radius};
  overflow: hidden;
`;

export const ContainerMidia = styled.div`
  background-color: ${({theme})=>theme.color.first5Alpha};
  ${MidiaStyled}
`;
export const Image = styled.img`
  ${MidiaStyled}
`;

export const Video = styled.video`
  ${MidiaStyled}
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.h2};
  padding: 0.5rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

