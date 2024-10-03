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
  width: 100%;
  margin: 0;
`;
