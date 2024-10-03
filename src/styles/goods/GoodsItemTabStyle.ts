import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin: 30px 24px 0;
  padding-bottom: 60px;
`;

export const ItemWrap = styled.div`
  border-radius: 6px;
  border: 1px solid var(--White);
  background: var(--Transparent);
  box-shadow: 0px 0px 8px 0px rgba(141, 166, 212, 0.3);
  padding: 30px 16px;
  text-align: center;

  > h1 {
    color: var(--BlueBlack);
    font: var(--MainText2);
    padding-bottom: 30px;
    border-bottom: 1px solid var(--SoftBlue);
  }

  > h5 {
    color: var(--BlueBlack);
    font: var(--BodyText);
    white-space: pre-line;
    margin-bottom: 15px;
  }

  > h2 {
    color: var(--DeepBlue);
    font: var(--HeaderG);
    margin-bottom: 30px;
  }

  > p {
    color: var(--SoftBlue);
    font: var(--Caption);
    margin-bottom: 5px;
  }

  > h6 {
    color: var(--SoftBlue);
    font: var(--Caption2);
  }
`;
