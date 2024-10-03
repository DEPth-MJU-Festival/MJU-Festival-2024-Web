import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--PastelBlue);
  width: 358px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
`;

export const BorderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;

export const Title = styled.p`
  color: var(--DeepBlue);
  font: var(--MainText);
  margin-top: -20px;
`;

export const Border = styled.div`
  width: 90%;
  height: 2px;
  background-color: white;
  margin-top: 15px;
`;

export const SubTitle = styled.p`
  font: var(--NoticeTime);
  margin-top: 15px;
`;

export const Content = styled.p`
  font: var(--NoticeTime);
  margin-top: 15px;
  text-align: center;

  span {
    color: var(--PaleYellow);
    font-weight: bold;
  }
`;

export const ContentContainer = styled.div`
  margin-bottom: -20px;
`;
