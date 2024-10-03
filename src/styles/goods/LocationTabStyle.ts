import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin: 30px 45px 0;
  padding-bottom: 60px;

  h1 {
    font: var(--HeaderG);
    color: var(--BlueBlack);
  }

  p {
    font: var(--Footer);
    color: var(--DeepBlue);
    white-space: pre-line;
  }
`;

export const LocationWrap = styled.div`
  display: flex;
  gap: 4px;
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Description = styled.p`
  text-indent: 20px;
`;
