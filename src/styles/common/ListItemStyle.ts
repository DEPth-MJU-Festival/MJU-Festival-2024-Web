import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 16px;
  padding: 25.5px 0;
  display: flex;
  position: relative;
  gap: 14px;
  border-top: 1.5px solid var(--PastelBlue);

  > img {
    width: 100px;
    border-radius: 6px;
    box-shadow: 0px 0px 8px 0px rgba(141, 166, 212, 0.3);
  }
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
