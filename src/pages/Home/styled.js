import styled from 'styled-components';
import { theme } from '../../theme';

export const ContainerHome = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ContainerSearch = styled.section``;

export const SearchForm = styled.form`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 6rem;
  border-radius: ${theme.border.radius};
`;
export const SearchInput = styled.input`
  min-width: 100%;
  border-bottom-left-radius: ${theme.border.radius};
  border-top-left-radius: ${theme.border.radius};
  padding: 1.8rem 1.8rem 1.8rem 2.3rem;
  background-color: ${theme.color.fourth};
`;

export const SearchButton = styled.button`
  font-size: ${theme.font.size.lg};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom-right-radius: ${theme.border.radius};
  border-top-right-radius: ${theme.border.radius};
  background-color: ${theme.color.fifth};
  color: ${theme.color.fourth};
`;

export const PostsContainer = styled.section`
  padding-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PostsNotFoundContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;
align-items: center;
`;


export const PostsNotFoundTitle = styled.h3`
  font-size: ${theme.font.size.lg};
  color: ${theme.color.thirdBg};
`;


