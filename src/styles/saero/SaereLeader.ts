import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Team = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 100px;
  background-color: var(--PastelBlue);
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--ButtonText);
  color: white;
`;

export const ComponentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  gap: 30px;
`;
