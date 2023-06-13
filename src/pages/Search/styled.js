import { styled } from 'styled-components';
import { theme } from '../../theme';

export const ContainerPost = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  padding-top: 3rem;
  justify-content: center;
`;

export const ContainerLink = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const TextError = styled.p`
  padding-top: 3rem;
  font-size: ${theme.font.size.xs};
`;

