import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ItemContainer = styled.div`
  background-color: var(--PaleBlue);
  padding: 30px 16px 60px 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
