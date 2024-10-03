import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 60px;
`;

export const ListWrap = styled.div`
  margin: 0 16px;
  padding: 30px 16px 20px;
  border-radius: 6px;
  background-color: var(--White);
  box-shadow: 0px 0px 8px 0px rgba(141, 166, 212, 0.3);

  > h1 {
    color: var(--BlueBlack);
    font: var(--SigerName);
    text-align: center;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--DeepBlue);
  }

  > div {
    margin: 15px 0;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 16px;
    height: 40px;
    border-radius: 6px;
    background: var(--PaleBlue);

    > h2 {
      color: var(--DeepBlue);
      font: var(--NaviFocus);
    }
  }

  > h6 {
    color: var(--BlueBlack);
    font: var(--BodyText);
    margin-left: 21px;
    margin-bottom: 10px;
  }

  > p {
    color: var(--DeepBlue);
    font: var(--BodyText);
    margin-left: 21px;
    margin-bottom: 10px;
  }
`;
