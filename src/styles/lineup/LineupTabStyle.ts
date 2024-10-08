import styled from 'styled-components';

export const NameWrap = styled.div`
  position: relative;
  background-color: var(--PastelBlue);
  margin: 30px 16px;
  text-align: center;
  position: relative;

  & > h3 {
    padding: 30px 0 15px;
    font: var(--NoticeSubtitle);
    color: var(--White);
  }

  & > hr {
    border: 1px solid var(--White);
    margin: 0 16px;
  }

  & > h1 {
    padding: 20px 0 30px;
    font: var(--SigerName);
    color: var(--PaleYellow);
  }
`;

export const CircleWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 3px;
  margin-bottom: 60px;
`;

export const Circle = styled.div<{ $selected: boolean }>`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: ${props =>
    props.$selected ? 'var(--BlueBlack)' : 'var(--PaleBlue)'};
`;
