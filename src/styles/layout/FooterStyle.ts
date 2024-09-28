import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--PastelBlue);
  padding-top: 33.58px;
  padding-bottom: 28px;

  > hr {
    margin: 20px 45px;
    width: 90%;
    border: none;
    border-bottom: 1px solid var(--PaleYellow);
  }

  > span {
    font: var(--Footer);
    color: var(--WarmWhite);
  }
`;

export const LinkWrap = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 25.65px;
`;

export const Link = styled.a`
  display: flex;
  padding: 4px;
  border-radius: 6px;
  background-color: var(--WarmWhite);

  > svg {
    width: 21px;
    height: 21px;
  }
`;
