import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--PaleBlue);
`;

export const TabWrap = styled.div`
  display: flex;
  height: 50px;
`;

export const TabItem = styled.div<{ $selected: boolean; $selectedId: number }>`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background-color: ${props =>
    props.$selected ? 'var(--PaleBlue)' : 'var(--SoftBlue)'};
  font: ${props => (props.$selected ? 'var(--TapFocus)' : 'var(--TapDefault)')};
  color: ${props => (props.$selected ? 'var(--SoftBlue)' : 'var(--White)')};
  border-top: ${props =>
    props.$selected ? '2px solid var(--PastelBlue)' : '2px solid var(--White)'};

  ${props =>
    props.$selectedId === 0
      ? props.$selected && 'border-right: 2px solid var(--PastelBlue);'
      : props.$selected && 'border-left: 2px solid var(--PastelBlue);'}

  border-bottom: ${props => !props.$selected && '2px solid var(--PastelBlue)'};
  padding-top: ${props => !props.$selected && '2px'};
`;

export const MapWrap = styled.div`
  margin: 28px 33px 48px;
  padding: 0;
`;
