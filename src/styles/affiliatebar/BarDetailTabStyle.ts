import styled from 'styled-components';

export const Container = styled.div`
  > h1 {
    margin: 0 32px;
    font: var(--TitlePage);
    color: #1a1a1a;
    text-align: center;
    padding-bottom: 17px;
    border-bottom: 2px solid var(--PaleBlue);
  }
`;

export const DetailWrap = styled.div`
  margin: 30px 32px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const PromotionWrap = styled.div`
  > h2 {
    font: var(--HeaderG);
    color: var(--DeepBlue);
  }

  > p {
    margin-top: 5px;
    font: var(--BodyText);
    color: var(--BlueBlack);
    white-space: pre-line;
  }
`;

export const InforWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  > div {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }

  > p {
    font: var(--BodyText);
    color: var(--SoftBlue);
    white-space: pre-line;
  }
`;

export const LinkBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 100px;
  border: none;
  background-color: var(--SoftBlue);
  box-shadow: 0px 0px 8px 0px rgba(141, 166, 212, 0.3);
  padding: 9.5px;
  margin-bottom: 60px;

  > p {
    color: var(--PaleYellow);
    font: var(--ButtonText);
  }
`;
