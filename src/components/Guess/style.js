import styled from 'styled-components';

export const WrapperGuess = styled.div`
  margin-top: -20px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  font-size: 20px;
  line-height: 23px;
`;

export const Input = styled.input`
  width: 350px;
  height: 40px;
  padding-left: 10px;

  border-radius: 3px;
  border: 1px solid #cccccc;

  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
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
`;
