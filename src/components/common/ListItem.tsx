import * as S from '@styles/common/ListItemStyle';

const ListItem = ({
  data,
  onClick,
}: {
  data: {
    img: string;
    title: string;
    description: string;
  };
  onClick?: () => void;
}) => {
  return (
    <S.Container onClick={onClick} style={{ cursor: onClick && 'pointer' }}>
      <img src={data.img} width="100%" height="100%" />
      <S.RightWrap>
        <h1>{data.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: data.description.replace(
              / {4,}/g,
              '&nbsp;&nbsp;&nbsp;&nbsp;',
            ),
          }}
        />
      </S.RightWrap>
    </S.Container>
  );
};

export default ListItem;
