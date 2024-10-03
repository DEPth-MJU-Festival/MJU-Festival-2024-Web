import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 5%;
  gap: 30px;
`;

export const LoadingMessage = styled.div`
  font-size: 18px;
  color: gray;
`;

export const Title = styled.p`
  margin-top: 30px;
  font: var(--MainText);
  width: 100%;
  border-bottom: 2px solid var(--PastelBlue);
  text-align: center;
  padding: 10px;
`;

export const NoNoticeMessage = styled.div`
  font-size: 18px;
  color: black;
`;
