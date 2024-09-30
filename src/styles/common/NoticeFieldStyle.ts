import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 16px;
  margin: 0 16px 30px;
  border-radius: 6px;
  background-color: var(--PastelBlue);
  box-shadow: 0px 0px 8px 0px rgba(141, 166, 212, 0.3);
  text-align: center;
  position: relative;

  > h1 {
    font: var(--MainText);
    color: var(--DeepBlue);
    padding-bottom: 15px;
    border-bottom: 2px solid var(--White);
  }

  > h2 {
    font: var(--NoticeTitle);
    color: var(--PaleYellow);
    margin-top: 15px;
    margin-bottom: 10px;
  }

  > h4 {
    font: var(--NoticeTime);
    color: var(--BlueBlack);
    margin-top: 15px;
  }

  > h5 {
    font: var(--NoticeSubtitle);
    color: var(--PaleYellow);
    margin-top: 15px;
  }

  > p {
    font: var(--NoticeTime);
    color: var(--White);
    white-space: pre-line;
    margin-bottom: 15px;
  }
`;

export const LocationWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;

  > svg {
    width: 18px;
    height: 18px;
  }

  > p {
    font: var(--NoticeTime);
    color: var(--BlueBlack);
  }
`;
