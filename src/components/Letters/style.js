import styled from 'styled-components';

export const WrapperLetters = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 40px);
  gap: 12px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(9, 40px);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(12, 30px);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(8, 30px);
  }

  @media (max-width: 400px) {
    margin-top: 20px;
    grid-template-columns: repeat(6, 30px);
  }
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

  @media (max-width: 650px) {
    height: 30px;
  }
`;
