import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  background: var(--White);
  box-shadow: 0px 0px 8px 0px rgba(141, 166, 212, 0.3);
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
`;

export const TextItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > p {
    margin-top: 15px;
    padding-top: 13px;
    border-top: 1px solid var(--DeepBlue);

    font: var(--BodyText2);
    color: var(--BlueBlack);
    white-space: pre-line;
  }

  > h5 {
    font: var(--BodyText2);
    color: var(--DeepBlue);
    white-space: pre-line;
  }
`;

export const LocationWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 2px;

  > p {
    font: var(--Caption);
    color: var(--DeepBlue);
  }
`;
