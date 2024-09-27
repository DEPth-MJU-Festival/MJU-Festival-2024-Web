import styled from 'styled-components';

export const BtnContainer = styled.button`
  background-color: var(--PastelBlue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9.5px 16px 10.5px;
  width: 100%;
  border: none;
  border-radius: 100px;
  box-shadow: 0px 0px 8px 0px rgba(141, 166, 212, 0.3);
`;

export const LeftWrap = styled.div`
  display: flex;
  gap: 6px;
  padding-top: 1px;

  > p {
    font: var(--ButtonText);
    color: var(--White);
    padding-top: 1px;
    user-select: none;
  }
`;
