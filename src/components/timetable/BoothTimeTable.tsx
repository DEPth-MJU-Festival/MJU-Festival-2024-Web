import * as S from '@styles/timetable/BoothTimeTableStyle';
import BorderIcon from '@icons/border/Border.svg?react';
import { BoothTimeTableText } from '@/constants/timetable';

const BoothTimeTable = () => {
  type IconPosition = 'LeftTop' | 'RightTop' | 'RightBottom' | 'LeftBottom';

  const renderIcons = (position: IconPosition, rotation: number) => {
    const PositionComponent = S[position as keyof typeof S];
    return (
      <PositionComponent>
        <BorderIcon style={{ transform: `rotate(${rotation}deg)` }} />
      </PositionComponent>
    );
  };

  return (
    <S.Container>
      {renderIcons('LeftTop', 0)}
      {renderIcons('RightTop', 90)}
      {renderIcons('RightBottom', 180)}
      {renderIcons('LeftBottom', 270)}
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
