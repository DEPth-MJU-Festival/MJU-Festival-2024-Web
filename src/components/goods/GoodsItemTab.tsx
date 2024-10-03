import { GoodsList } from '@/constants/goods';
import * as S from '@styles/goods/GoodsItemTabStyle';
import { useState } from 'react';

const paddingTopValues = [
  '40.00%',
  '39.35%',
  '37.74%',
  '100.16%',
  '55.65%',
  '151.74%',
  '94.68%',
  '94.00%',
];

const GoodsItemTab = ({ preloadImages }: { preloadImages: string[] }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <S.Container>
      {GoodsList.map((data, index) => {
        return (
          <S.ItemWrap key={index}>
            <h1>{data.title}</h1>
            <div
              style={{
                position: 'relative',
                width: '100%',
                margin: '30px 0',
                paddingTop: paddingTopValues[index],
              }}
            >
              <img
                src={preloadImages[index]}
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
                }}
              />
            </div>
            <h5>{data.description}</h5>
            <h2>{data.price}</h2>
            <p>{data.notice}</p>
            <h6>{data.reference}</h6>
          </S.ItemWrap>
        );
      })}
    </S.Container>
  );
};

export default GoodsItemTab;
