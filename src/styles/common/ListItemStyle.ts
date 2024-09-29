import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 0 16px;
  display: flex;
  position: relative;
  gap: 14px;
  margin-left: -8px;

  > img {
    width: 116px;
  }
`;

export const RightWrap = styled.div`
  padding: 8px 0;

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
