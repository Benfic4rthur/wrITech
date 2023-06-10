import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.secondBg};
  min-width: 100%;
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const InputStyled = styled.input`
  min-width: 100%;
  height: 5.2rem;
  outline: none;
  background-color: ${({ theme }) => theme.color.secondBg};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.color.second};
  font-family: ${({ theme }) => theme.font.family.robotoSlab};
  line-height: ${({ theme }) => theme.font.lineHeight};

  &::placeholder,
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.second};
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.color.second};
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.color.first};
    outline-offset: 3px;
  }
`;

export const Input = styled(InputStyled)`
  &[type='file']::-webkit-file-upload-button {
    display: none;
  }
  ${props => props.style}
`;


export const SvgStyled = styled.form`
  color: ${({ theme }) => theme.color.second};
`;

export const Textaria = styled.textarea`
  width: 100%;
  height: 15rem;
  padding: 1.6rem;
  color: ${({ theme }) => theme.color.second};
  border-radius: ${({ theme }) => theme.border.radius};
  font-family: ${({ theme }) => theme.font.family.roboto};
  line-height: ${({ theme }) => theme.font.lineHeight};
  background-color: ${({ theme }) => theme.color.secondBg};
  word-break: break-all;
  resize: none;

  &::placeholder,
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.second};
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.color.second};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.color.first};
    outline-offset: 3px;
  }
`;

export const ContainerSvg = styled.div`
  position: absolute;
  left: 1.6rem;
  top: 50%;
  height: ${({ theme }) => theme.sizeSVG / 10}rem;
  width: ${({ theme }) => theme.sizeSVG / 10}rem;
  transform: translateY(-50%);
`;
