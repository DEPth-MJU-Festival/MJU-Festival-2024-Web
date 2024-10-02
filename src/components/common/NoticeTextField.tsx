import * as S from '@styles/common/NoticeFieldStyle';
import BorderIcon from '@icons/border/Border.svg?react';
import RenderIcon from './RenderIcon';

const NoticeTextField = ({
  data,
}: {
  data: {
    title: string;
    description: string;
    date?: string;
  };
}) => {
  return (
    <S.Container>
      {RenderIcon('LeftTop', 0, 16, BorderIcon)}
      {RenderIcon('RightTop', 90, 16, BorderIcon)}
      {RenderIcon('RightBottom', 180, 16, BorderIcon)}
      {RenderIcon('LeftBottom', 270, 16, BorderIcon)}
      <h1>{data.title}</h1>
      <h4>{data.description}</h4>
      {data.date && <h5>{data.date}</h5>}
    </S.Container>
  );
};

export default NoticeTextField;
