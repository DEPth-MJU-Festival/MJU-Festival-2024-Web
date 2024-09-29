import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  background: var(--White);
  box-shadow: 0px 0px 8px 0px rgba(141, 166, 212, 0.3);

  > img {
    margin-top: -1px;
  }
`;

export const TextWrap = styled.div`
  padding: 15px 16px;

  > h4 {
    font: var(--NaviFocus);
    color: var(--SoftBlue);
  }

  > h3 {
    font: var(--HeaderG);
    color: var(--BlueBlack);
  }

  > p {
    margin: 15px 0;
    padding-top: 15px;
    border-top: 1px solid var(--DeepBlue);

    font: var(--BodyText);
    color: var(--BlueBlack);
    white-space: pre-line;
  }
`;

export const LocationWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  > p {
    font: var(--Caption);
    color: var(--DeepBlue);
  }
`;
