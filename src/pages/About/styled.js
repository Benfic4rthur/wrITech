import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  background-color: ${theme.color.thirdOpacity03};
  padding: 1.5rem;
  border-radius: ${theme.border.radius};
  width: min(100%, 36rem);
  box-shadow: 2px 2px 5px ${({ theme }) => theme.color.shadow};
  display: flex;
  gap: 1rem;
  flex-flow: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
  transform: rotateY(0deg);
  transition: all 0.7s;
  filter: drop-shadow(1px 2px 10px rgb(80, 73, 84));
  margin: 0 auto;

  &:hover {
    filter: drop-shadow(1px 2px 10px white);
    transform: rotateY(360deg);
    transition: all 0.7s;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-family: ${theme.font.family.robotoSlab};
  font-size: ${theme.font.size.lg};
`;

export const Title2 = styled.h2`
  font-size: ${theme.font.size.sm};
`;

export const Text = styled.p`
  font-size: ${theme.font.size.xs};
`;
