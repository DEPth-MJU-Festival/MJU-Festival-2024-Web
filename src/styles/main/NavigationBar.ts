import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 64px;
  z-index: 100;

  background-color: var(--WhiteSmoke);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: 30px;
  transition: all 0.3s ease-in-out;
`;

export const NavigationWrap = styled.div<{ $selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 65px;
  height: 60px;
  cursor: pointer;

  border-bottom: ${props =>
    props.$selected ? '2px solid var(--SoftBlue)' : '2px solid transparent'};
`;

export const NavigationText = styled.div<{ $selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  user-select: none;
  white-space: pre-wrap;

  font: ${props =>
    props.$selected ? 'var(--NaviFocus)' : 'var(--NaviDefault)'};
`;

export const Line = styled.div`
  height: 16px;
  border: 0.5px solid var(--SoftBlue);
`;
