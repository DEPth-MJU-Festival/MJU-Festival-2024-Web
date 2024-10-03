import styled from 'styled-components';

export const ImgWrap = styled.div`
  position: relative;
  margin: 38px;
`;

export const IconBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: 'pointer';
  background: transparent;
  border: none;

  & > svg {
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 8px 0px rgba(141, 166, 212, 0.3);
  }
`;
