import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font: var(--MainText);
  margin: 30px 16px;
  padding-bottom: 16px;
  padding-top: 16px;
  border-bottom: 2px solid var(--PastelBlue);
`;

export const SaeroTitle = styled.p`
  font: var(--ButtonText);
  color: #8db9b6;
`;

export const SearoContainer = styled.div`
  width: 90%;
  height: 140px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(141, 166, 212, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;
