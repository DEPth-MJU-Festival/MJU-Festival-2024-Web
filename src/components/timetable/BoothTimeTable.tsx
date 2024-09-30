import * as S from '@styles/timetable/BoothTimeTableStyle';
import { BoothTimeTableText } from '@constants/timetable';
import RenderIcon from '../common/RenderIcon';
import BorderIcon from '@icons/border/Border.svg?react';

const BoothTimeTable = () => {
  return (
    <S.Container>
      {RenderIcon('LeftTop', 0, 4, BorderIcon)}
      {RenderIcon('RightTop', 90, 4, BorderIcon)}
      {RenderIcon('RightBottom', 180, 4, BorderIcon)}
      {RenderIcon('LeftBottom', 270, 4, BorderIcon)}
      {BoothTimeTableText.map((data, index) => {
        return (
          <div key={index}>
            <S.NoticeTitle>{data.title}</S.NoticeTitle>
            {data.schedules.map((data, index) => {
              return (
                <div key={index}>
                  <S.NoticeSubTitle>{data.sub}</S.NoticeSubTitle>
                  <S.NoticeTime>{data.time}</S.NoticeTime>
                </div>
              );
            })}
          </div>
        );
      })}
    </S.Container>
  );
};

export default BoothTimeTable;
