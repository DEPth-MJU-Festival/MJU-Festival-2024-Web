import * as S from '@styles/common/ListItemStyle';

const ListItem = ({
  data,
  preloadImage,
  onClick,
  isDeep = false,
}: {
  data: {
    img: string;
    title: string;
    description?: string;
  };
  preloadImage?: string;
  onClick?: () => void;
  isDeep?: boolean;
}) => {
  return (
    <S.Container
      onClick={onClick}
      style={{ cursor: onClick && 'pointer' }}
      $isDeep={isDeep}
    >
      <img src={preloadImage || data.img} width="100%" height="100%" />
      <S.RightWrap>
        <h1>{data.title}</h1>
        {data.description && (
          <p
            dangerouslySetInnerHTML={{
              __html: data.description.replace(
                / {4,}/g,
                '&nbsp;&nbsp;&nbsp;&nbsp;',
              ),
            }}
          />
        )}
      </S.RightWrap>
    </S.Container>
  );
};

export default ListItem;
