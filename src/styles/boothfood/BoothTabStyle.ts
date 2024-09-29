import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
`;

export const HeadWrap = styled.div<{ $selected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1.5px solid var(--SoftBlue);
  padding: 14.5px 16px 13px;
  background-color: ${props =>
    props.$selected ? 'var(--WhiteSmoke)' : 'var(--PaleBlue)'};

  & > h2 {
    font: var(--HeaderG);
    color: var(--BlueBlack);
    margin-top: 1px;
  }

  & > svg {
    transform: ${props =>
      props.$selected ? 'rotate(270deg)' : 'rotate(90deg)'};
    margin-bottom: 2px;
  }
`;

export const BodyWrap = styled.div`
  border-top: 1.5px solid var(--SoftBlue);
  background-color: var(--WhiteSmoke);

  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 16px;
`;
