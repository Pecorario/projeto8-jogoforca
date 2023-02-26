import styled from 'styled-components';

export const WrapperGame = styled.div`
  width: 100%;
  max-width: 934px;
  height: 467px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
    width: 400px;
  }
`;

export const WrapperWord = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ChooseWord = styled.button`
  width: 200px;
  height: 60px;

  font-size: 20px;

  border-radius: 8px;

  background: #27ae60;
  color: #fff;

  transition: all 0.2s;

  :not([disabled]):hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const ChoosenWord = styled.div`
  display: flex;
  gap: 10px;

  margin-bottom: 27px;
  margin-right: 10px;
`;

export const Word = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-size: 50px;
  line-height: 68px;

  color: #000;
  ${({ didYouWin }) => didYouWin && 'color: #27ae60'};
  ${({ didYouLose }) => didYouLose && 'color: #ff0000'};
`;
