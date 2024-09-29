import * as S from '@styles/boothfood/BoothItemStyle';
import GoogleMapsIcon from '@icons/header/GoogleMaps.svg?react';

interface BaseData {
  img: string;
  host: string;
  title: string;
}

interface DetailedData extends BaseData {
  description: string;
  location: string;
}

type BoothData = BaseData | DetailedData;

const BoothItem = ({ data }: { data: BoothData }) => {
  return (
    <S.Container>
      <img src={data.img} width="100%" />
      <S.TextWrap>
        <h4>{data.host}</h4>
        <h3>{data.title}</h3>
        {'description' in data && 'location' in data && (
          <>
            <p>{data.description}</p>
            <S.LocationWrap>
              <GoogleMapsIcon color="var(--DeepBlue)" />
              <p>{data.location}</p>
            </S.LocationWrap>
          </>
        )}
      </S.TextWrap>
    </S.Container>
  );
};

export default BoothItem;
