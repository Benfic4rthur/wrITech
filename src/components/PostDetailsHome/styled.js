import { styled } from 'styled-components';
import { theme } from '../../theme';

export const ContainerPost = styled.article`
  height: fit-content;
  width: min(100%, 36rem);
  padding: 3rem 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: .7rem;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.color.thirdOpacity03};
`;

export const Image = styled.img`
  width: 100%;
`;

export const Video = styled.video`
  width: 100%;
`;

export const Tag = styled.div`
  padding: 0.6rem 1.2rem;
  width: fit-content;
  font-size: 1.1rem;
  color: ${theme.color.thirdBg};
  border-radius: ${theme.border.radius};
  background-color: ${theme.color.first5Alpha};
`;

export const ContainerTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.5rem;
`;

export const Title = styled.h2`
  font-size: ${theme.font.size.base};
  color: ${theme.color.thirdBg};
`;
export const Author = styled.h3`
  font-size: ${theme.font.size.xs};
  color: ${theme.color.thirdBg};
`;
