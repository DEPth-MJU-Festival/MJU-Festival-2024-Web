import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 60px;
`;

export const ListWrap = styled.div`
  margin: 0 16px;
  padding: 30px 0px 0 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: var(--White);
  box-shadow: 0px 0px 8px 0px rgba(141, 166, 212, 0.3);

  & > p {
    color: var(--BlueBlack);
    font: var(--NaviDefault);
    white-space: pre-line;
    text-align: center;
    margin-top: 7px;
    margin-bottom: 15px;
  }
`;

export const ItemWrap = styled.div`
  width: 100%;
`;

export const DropdownWrap = styled.div`
  margin: 0 16px;
  border-top: 1.5px solid var(--DeepBlue);
  padding-top: 15px;
`;

export const ButtonWrap = styled.button<{ $selected: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 0 16px;
  height: 40px;
  border: none;
  border-radius: 6px;
  background: var(--PaleBlue);

  & > h2 {
    color: var(--BlueBlack);
    font: var(--NaviFocus);
  }

  & > svg {
    transform: ${props =>
      props.$selected ? 'rotate(270deg)' : 'rotate(90deg)'};
    margin-bottom: 2px;
  }
`;

export const SelectedWrap = styled.div`
  margin-bottom: 30px;

  > div {
    margin-left: 16px;
    display: flex;
    gap: 4px;

    > h6 {
      font: var(--Caption);
      color: var(--DeepBlue);
    }
  }

  > p {
    margin-left: 37px;
    margin-top: 10px;
    font: var(--BodyText);
    color: var(--BlueBlack);
    white-space: pre-line;
  }
`;
