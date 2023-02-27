import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 60px 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  @media (max-width: 650px) {
    padding: 20px;
    gap: 0;

    justify-content: center;
  }
`;
