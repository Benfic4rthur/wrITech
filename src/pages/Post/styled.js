import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  width: 100%;
  gap: 1rem;
`;

export const Midia = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageStyled = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;

  &.landscape {
    min-width: 100%;
  }

  &.portrait {
    max-height: 50rem;
    min-height: 100%;
  }
`;

export const Video = styled.video`
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  width: 70rem;
  height: auto;
`;

export const Title = styled.h1`
  font-size: ${theme.font.size.xl};
  font-family: ${theme.font.family.robotoSlab};
  text-align: center;
  color: ${theme.color.firstBg};
`;

export const ContainerTag = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-flow: row;
`;

export const Tag = styled.p`
  font-size: ${theme.font.size.xs};
  padding: 0.6rem;
  border-radius: ${theme.border.radius};
  background-color: ${theme.color.thirdOpacity03};
  width: fit-content;
  box-shadow: 2px 2px 5px ${theme.color.shadow};
  text-transform: lowercase;
  color: ${theme.color.firstBg};

   &:hover{
    background-color: ${theme.color.first5Alpha};
    color: ${theme.color.firstHover};
   }
`;

export const Body = styled.p`
  font-size: ${theme.font.size.sm};
  line-height: ${theme.font.lineHeight};
  color: ${theme.color.firstBg};
`;

export const Author = styled.p`
  font-size: ${theme.font.size.xs};
  color: ${theme.color.firstBg};
`;
