import styled from 'styled-components';

export const Container = styled.div`
  width: 27%;
  height: 158px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const ImageContainer = styled.div`
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #ffffff 100%
  ); /* 그라데이션 배경 */
  border-radius: 3px;
`;

export const Name = styled.p`
  font: var(--BodyText);
  margin-top: 10px;
`;
