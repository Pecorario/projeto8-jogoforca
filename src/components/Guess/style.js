import styled from 'styled-components';

export const WrapperGuess = styled.form`
  width: 100%;
  margin-top: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media (max-width: 650px) {
    margin-top: 20px;
  }
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  font-size: 20px;
  line-height: 23px;

  @media (max-width: 750px) {
    font-size: 16px;
  }

  @media (max-width: 650px) {
    font-size: 14px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  flex: 1;
  max-width: 350px;
  height: 40px;
  padding-left: 10px;

  border-radius: 3px;
  border: 1px solid #cccccc;

  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);

  @media (max-width: 750px) {
    width: 300px;
  }

  @media (max-width: 650px) {
    max-width: 200px;
  }

  @media (max-width: 500px) {
    height: 30px;
  }

  @media (max-width: 375px) {
    max-width: 150px;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 3px;

  font-size: 16px;
  line-height: 19px;

  background: #e1ecf4;
  color: #3c76a1;
  border: 1px solid #7aa7c7;

  :disabled {
    background: #9faab5;
    color: #798a9f;
  }

  :not([disabled]):hover {
    cursor: pointer;
    filter: brightness(0.95);
  }

  @media (max-width: 500px) {
    width: 20%;
    font-size: 10px;
    height: 30px;
  }
`;
