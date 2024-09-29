import * as S from '@/styles/common/NoticeFieldStyle';
import GoogleMapsIcon from '@icons/header/GoogleMaps.svg?react';
import BorderLongIcon from '@icons/border/BorderLong.svg?react';
import BorderLongRightIcon from '@icons/border/BorderLongRight.svg?react';
import RenderIcon from './RenderIcon';

const NoticeField = ({
  data,
}: {
  data: {
    title: string;
    date: string;
    location: string;
  };
}) => {
  return (
    <S.Container>
      {RenderIcon('LeftTop', 0, 16, BorderLongIcon)}
      {RenderIcon('RightTop', 0, 16, BorderLongRightIcon)}
      {RenderIcon('RightBottom', 180, 16, BorderLongIcon)}
      {RenderIcon('LeftBottom', 180, 16, BorderLongRightIcon)}
      <h1>{data.title}</h1>
      <h2>{data.title} 운영 시간</h2>
      <p>{data.date}</p>
      <S.LocationWrap>
        <GoogleMapsIcon color="var(--BlueBlack)" />
        <p>{data.location}</p>
      </S.LocationWrap>
    </S.Container>
  );
};

export default NoticeField;
