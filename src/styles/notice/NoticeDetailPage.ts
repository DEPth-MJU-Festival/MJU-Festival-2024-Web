import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  margin-bottom: 30px;
`;

export const BannerTitle = styled.p`
  font: var(--MainText);
  width: 100%;
  border-bottom: 2px solid var(--PastelBlue);
  text-align: center;
  padding: 10px;
`;

export const Title = styled.p`
  font: var(--Title);
  margin-top: 30px;
`;

export const Time = styled.p`
  font: var(--BodyText);
  color: var(--SoftBlue);
  margin-top: 10px;
`;

export const Content = styled.p`
  margin-top: 30px;
  font: var(--BodyText);
  white-space: pre-wrap;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const LoadingMessage = styled.div`
  font-size: 18px;
  color: gray;
`;
