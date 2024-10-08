import * as S from '@styles/goods/LocationTabStyle';
import { LocationList } from '@/constants/goods';
import MapImg from '@images/affiliateditems/Map.png';
import GoogleMapsIcon from '@icons/header/GoogleMaps.svg?react';
import { useState } from 'react';

const LocationTab = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <S.Container>
      <div>
        <h1>위치 안내</h1>
        <div
          style={{
            position: 'relative',
            width: '100%',
            paddingTop: '57.51%',
            margin: '15px 0',
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
              borderRadius: 6,
              boxShadow: '0px 0px 8px 0px rgba(141, 166, 212, 0.3)',
            }}
          />
        </div>
        <S.LocationWrap>
          <GoogleMapsIcon color="var(--DeepBlue)" />
          <p>종합관 앞 이벤트 & 굿즈 부스</p>
        </S.LocationWrap>
      </div>
      {LocationList.map((data, index) => {
        return (
          <S.ListWrap key={index}>
            <h1>{data.title}</h1>
            <p>{data.description1}</p>
            <p
              style={{
                textIndent: index === LocationList.length - 1 ? 15 : 0,
              }}
            >
              {data.description2}
            </p>
            {data.description2_2 && (
              <p
                style={{
                  textIndent: 93,
                }}
              >
                {data.description2_2}
              </p>
            )}
            <p>{data.description3}</p>
          </S.ListWrap>
        );
      })}
    </S.Container>
  );
};

export default LocationTab;
