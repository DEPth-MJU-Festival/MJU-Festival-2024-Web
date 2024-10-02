import * as S from '@styles/affiliateditems/BrandBoothTabStyle';
import { BrandBoothList } from '@/constants/affiliateditems';
import GoogleMapsIcon from '@icons/header/GoogleMaps.svg?react';
import Map from '@images/affiliateditems/Map.png';

const BrandBoothTab = () => {
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
            <img src={Map} width="100%" />
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
