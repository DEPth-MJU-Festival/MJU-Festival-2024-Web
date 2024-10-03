import styled from 'styled-components';

export const Container = styled.div<{ $isDeep: boolean }>`
  margin: 0 16px;
  padding: ${props => (props.$isDeep ? '15px 0' : '25.5px 0')};
  display: flex;
  position: relative;
  gap: 14px;
  border-top: ${props =>
    props.$isDeep
      ? '1.5px solid var(--DeepBlue)'
      : '1.5px solid  var(--PastelBlue)'};
`;

export const RightWrap = styled.div`
  > h1 {
    font: var(--HeaderG);
    color: var(--BlueBlack);
    margin-top: 3px;
    margin-bottom: 6px;
  }

  > p {
    font: var(--BodyText);
    color: var(--BlueBlack);
    white-space: pre-line;
  }
`;
