import styled from 'styled-components';

export const ComponentContainer = styled.div`
  /* max-width: 100%; */
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 100%;
  }
  .subContainer {
    font-size: 36px;
  }
`;
