import styled from 'styled-components';

export const Container = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 0 4px 10px rgba(141, 166, 212, 0.3);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Position = styled.p`
  font: var(--Footer);
  padding: 10px;
  width: 80%;
  text-align: center;
  border-bottom: 0.2px solid var(--PastelBlue);
`;

export const Name = styled.p`
  font: var(--TapFocus);
  margin-top: 10px;
`;

export const Major = styled.p`
  font: var(--SubText);
  color: var(--SoftBlue);
`;
