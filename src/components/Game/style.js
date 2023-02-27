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

  @media (max-width: 860px) {
    height: 350px;

    img {
      width: 300px;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;

    height: auto;

    img {
      width: 60%;
    }
  }
`;

export const WrapperWord = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 650px) {
    height: 120px;
    margin-top: 40px;

    align-items: center;
  }

  @media (max-width: 400px) {
    height: 90px;
    margin-top: 20px;
  }
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

  @media (max-width: 860px) {
    width: 150px;
    height: 50px;

    font-size: 16px;
  }

  @media (max-width: 400px) {
    width: 120px;
    height: 40px;

    font-size: 14px;
  }
`;

export const ChoosenWord = styled.div`
  margin-bottom: 27px;
  margin-right: 10px;

  @media (max-width: 860px) {
    margin-bottom: 17px;
  }

  @media (max-width: 650px) {
    margin-bottom: 10px;
    margin-right: 0;
  }

  @media (max-width: 400px) {
    margin: 0;
  }
`;

export const Word = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-size: 50px;
  line-height: 68px;

  ${({ didYouWin, didYouLose }) => !didYouWin && !didYouLose && 'color: #000'};
  ${({ didYouWin }) => didYouWin && 'color: #27ae60'};
  ${({ didYouLose }) => didYouLose && 'color: #ff0000'};

  @media (max-width: 860px) {
    font-size: 40px;
  }

  @media (max-width: 650px) {
    font-size: 30px;
  }

  @media (max-width: 400px) {
    font-size: 25px;
    line-height: 30px;
  }
`;
