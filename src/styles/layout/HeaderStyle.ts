import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--PastelBlue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px 0 16px;
  height: 64px;

  position: sticky;
  top: 0;
  z-index: 100;
`;

export const RightWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
