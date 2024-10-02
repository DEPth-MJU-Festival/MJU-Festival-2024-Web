import { LocationList } from '@/constants/goods';
import MapImg from '@images/affiliateditems/Map.png';
import GoogleMapsIcon from '@icons/header/GoogleMaps.svg?react';
import * as S from '@styles/goods/LocationTabStyle';

const LocationTab = () => {
  return (
    <S.Container>
      <div>
        <h1>이벤트&굿즈 안내</h1>
        <img src={MapImg} width="100%" />
        <S.LocationWrap>
          <GoogleMapsIcon color="var(--DeepBlue)" />
          <p>종합관 관 이벤트 & 굿즈 부스</p>
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
