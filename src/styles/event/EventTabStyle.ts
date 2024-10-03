import styled from 'styled-components';

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

export const DropdownWrap = styled.div`
  box-shadow: 0px 0px 8px 0px rgba(145, 156, 176, 0.3);
`;

export const DropdownTitle = styled.h1<{ $isLast: boolean }>`
  padding-left: 16px;
  color: var(--BlueBlack);
  font: var(--HeaderG);
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: ${props =>
    props.$isLast ? 'none' : '1.5px solid var(--SoftBlue)'};
`;

export const DropdownItemWrap = styled.div<{
  $isDescription: boolean;
  $selected: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 26px;
  height: 50px;
  border-bottom: 1.5px solid var(--SoftBlue);

  background-color: ${props =>
    props.$isDescription ? 'var(--PaleBlue)' : 'var(--White)'};

  > h2 {
    color: var(--BlueBlack);
    font: var(--TapDefault);
  }

  & > svg {
    transform: ${props =>
      props.$selected ? 'rotate(270deg)' : 'rotate(90deg)'};
    margin-bottom: 2px;
  }
`;

export const DropdownItem = styled.div`
  white-space: pre-line;
  padding: 15px 16px;
  color: #000;
  font: var(--Caption);
  border-bottom: 1.5px solid var(--SoftBlue);
`;
