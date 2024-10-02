import * as S from '@styles/common/NoticeFieldStyle';
import BorderIcon from '@icons/border/Border.svg?react';
import RenderIcon from './RenderIcon';

const NoticeTitleField = ({
  data,
}: {
  data: {
    caption?: string;
    title: string;
  };
}) => {
  return (
    <S.TitleContainer>
      {RenderIcon('LeftTop', 0, 16, BorderIcon)}
      {RenderIcon('RightTop', 90, 16, BorderIcon)}
      {RenderIcon('RightBottom', 180, 16, BorderIcon)}
      {RenderIcon('LeftBottom', 270, 16, BorderIcon)}
      {data.caption && <h3>{data.caption}</h3>}
      <h1>{data.title}</h1>
    </S.TitleContainer>
  );
};

export default NoticeTitleField;
