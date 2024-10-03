import * as S from '@styles/common/ListItemStyle';
import { useState } from 'react';

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
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <S.Container
      onClick={onClick}
      style={{ cursor: onClick && 'pointer' }}
      $isDeep={isDeep}
    >
      <div
        style={{
          position: 'relative',
          minWidth: '100px',
          height: '75px',
        }}
      >
        <img
          src={preloadImage || data.img}
          onLoad={() => setIsLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            borderRadius: 6,
            boxShadow: '0px 0px 8px 0px rgba(141, 166, 212, 0.3)',
          }}
        />
      </div>
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
