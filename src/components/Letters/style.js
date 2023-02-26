import styled from 'styled-components';

export const WrapperLetters = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 40px);
  gap: 12px;
`;

export const ButtonLetter = styled.button`
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  border-radius: 3px;
  border: 1px solid #7aa7c7;
  background: #e1ecf4;
  color: #39739d;

  height: 40px;

  transition: all 0.2s;

  :disabled {
    background: #9faab5;
    color: #798a9f;
  }

  :not([disabled]):hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
