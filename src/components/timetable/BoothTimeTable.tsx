import * as S from '@styles/timetable/BoothTimeTableStyle';
import { BoothTimeTableText } from '@/constants/timetable';
import RenderIcon from './RenderIcon';

const BoothTimeTable = () => {
  return (
    <S.Container>
      {RenderIcon('LeftTop', 0, 4)}
      {RenderIcon('RightTop', 90, 4)}
      {RenderIcon('RightBottom', 180, 4)}
      {RenderIcon('LeftBottom', 270, 4)}
      <S.NoticeTitle>팔찌 부스 운영 시간</S.NoticeTitle>
      <S.NoticeTime style={{ marginBottom: '15px' }}>
        : 10:00 ~ 19:00
      </S.NoticeTime>
      <S.NoticeTitle>총학생회 이벤트 부스 운영 시간</S.NoticeTitle>
      {BoothTimeTableText.map((data, index) => {
        return (
          <div key={index}>
            <S.NoticeSubTitle>{data.sub}</S.NoticeSubTitle>
            <S.NoticeTime>{data.time}</S.NoticeTime>
          </div>
        );
      })}
    </S.Container>
  );
};

export default BoothTimeTable;
