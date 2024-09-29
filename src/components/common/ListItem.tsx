import * as S from '@styles/common/ListItemStyle';

const ListItem = ({
  data,
}: {
  data: {
    img: string;
    title: string;
    description: string;
  };
}) => {
  return (
    <S.Container>
      <img src={data.img} width="100%" />
      <S.RightWrap>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </S.RightWrap>
    </S.Container>
  );
};

export default ListItem;
