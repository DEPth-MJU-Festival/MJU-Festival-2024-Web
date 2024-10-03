import * as S from '@styles/affiliateditems/BrandBoothTabStyle';
import { BrandBoothList } from '@/constants/affiliateditems';
import GoogleMapsIcon from '@icons/header/GoogleMaps.svg?react';
import MapImg from '@images/affiliateditems/Map.png';
import { useState } from 'react';

const BrandBoothTab = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <S.Container>
      {BrandBoothList.map((data, index) => {
        return (
          <S.ListWrap key={index}>
            <h1>{data.title}</h1>
            <div>
              <GoogleMapsIcon color="var(--DeepBlue)" />
              <h2>{data.location}</h2>
            </div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: '57.51%',
                marginBottom: 10,
              }}
            >
              <img
                src={MapImg}
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
            <h6>{data.date}</h6>
            <h6>{data.description}</h6>
            <p>{data.reference}</p>
          </S.ListWrap>
        );
      })}
    </S.Container>
  );
};

export default BrandBoothTab;
