import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  background-color: var(--PastelBlue);
  padding-bottom: 4px;
  text-align: center;
  position: relative;
`;

const IconPosition = styled.div`
  position: absolute;
`;

export const LeftTop = styled(IconPosition)`
  top: 4px;
  left: 4px;
`;

export const RightTop = styled(IconPosition)`
  top: 4px;
  right: 4px;
`;

export const RightBottom = styled(IconPosition)`
  bottom: 0;
  right: 4px;
`;

export const LeftBottom = styled(IconPosition)`
  bottom: 0;
  left: 4px;
`;

export const NoticeTitle = styled.div`
  font: var(--NoticeTitle);
  color: var(--PaleYellow);
  padding-top: 15px;
  margin-bottom: 10px;
`;

export const NoticeSubTitle = styled.div`
  font: var(--NoticeSubtitle);
  color: var(--DeepBlue);
`;

export const NoticeTime = styled.div`
  font: var(--NoticeTime);
  color: var(--White);
  margin-bottom: 10px;
`;
