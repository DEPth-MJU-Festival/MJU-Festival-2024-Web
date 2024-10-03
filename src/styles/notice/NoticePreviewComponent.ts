import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-bottom: 20px;
  width: 100%;
  border-bottom: var(--PaleBlue) solid 1px;
  cursor: pointer;
`;

export const Title = styled.p`
  font: var(--HeaderN);
  padding: 0;
`;

export const Preview = styled.p`
  font: var(--BodyText);
`;

export const Date = styled.p`
  font: var(--Caption);
  color: var(--SoftBlue);
  margin-top: 10px;
`;
