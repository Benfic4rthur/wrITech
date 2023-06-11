import { styled } from 'styled-components';

export const ContainerCreatePost = styled.div`
  gap: 1rem;
  flex-direction: column;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CreatePostTitle = styled.h2`
  display: inline-block;
  width: fit-content;
`;

export const ContainerPost = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.color.shadow};
  background-color: ${({ theme }) => theme.color.thirdOpacity03};
  padding: 1.5rem 1rem;
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const Post = styled.div`
  display: flex;
  height: 6rem;
  justify-content: space-between;
  align-items: center;
  padding-inline: 2.5rem;
  padding-block: 1.5rem;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.color.shadow};
  background-color: ${({ theme }) => theme.color.first5Alpha};
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const TitlePost = styled.h3`
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-weight: 500;
  color: ${({ theme }) => theme.color.fourth};
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const ButtonEvent = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.color.third};
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.color.fourth};
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.color.shadow};
  border-radius: ${({ theme }) => theme.border.radius};
  cursor: pointer;
  transition: 300ms color, 300ms background-color;
  &:hover {
    color: ${({ theme }) => theme.color.first};
    background-color: ${({ theme }) => theme.color.firstBg};
  }

  &.delete:hover {
    color: ${({ theme }) => theme.color.error};
    background-color: ${({ theme }) => theme.color.firstBg};
  }
`;

export const ContainerButtonEvent = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ContainerHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 3rem;
`;

// .dashboard {
//     text-align: center;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }

//   .dashboard h2 {
//     font-size: 2.2em;
//     margin-bottom: 0.5em;
//   }

//   .dashboard p {
//     color: #aaa;
//     margin-bottom: 1em;
//   }

//   .noposts {
//     text-align: center;
//   }

//   .noposts p {
//     margin-bottom: 1.5em;
//   }

//   .noposts a {
//     padding: 10px 25px;
//   }

//   .post_header {
//     display: flex;
//     justify-content: space-between;
//     font-weight: bold;
//     border-bottom: 2px solid #ccc;
//     width: 80%;
//     padding: 10px;
//   }

//   .post_row {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     border-bottom: 1px solid #eee;
//     width: 80%;
//     padding: 10px;
//   }

//   .post_row p {
//     color: #000;
//   }

//   .post_row button,
//   .post_row a {
//     margin: 0 5px;
//     height: 30px;
//     width: 100px;
//     font-size: 0.7em;
//   }
