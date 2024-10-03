import BorderIcon from '@icons/border/Border.svg?react';
import GoogleMapsIcon from '@icons/header/GoogleMaps.svg?react';
import * as S from '@styles/common/NoticeFieldStyle';
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
      {RenderIcon('LeftTop', 0, 16, BorderIcon)}
      {RenderIcon('RightTop', 90, 16, BorderIcon)}
      {RenderIcon('RightBottom', 180, 16, BorderIcon)}
      {RenderIcon('LeftBottom', 270, 16, BorderIcon)}
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
