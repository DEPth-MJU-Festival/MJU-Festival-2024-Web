import * as S from '@styles/boothfood/BoothItemStyle';
import GoogleMapsIcon from '@icons/header/GoogleMaps.svg?react';

type Props = {
  img: string;
  item: {
    host: string;
    title: string;
    description: string;
    location: string;
    time?: string;
    etc?: string;
  }[];
};

const BoothItem = ({ data }: { data: Props }) => {
  return (
    <S.Container>
      <img src={data.img} width="100%" />
      {data.item.map((data, index) => {
        return (
          <S.TextWrap key={index}>
            <h4>{data.host}</h4>
            <h3>{data.title}</h3>
            <S.TextItemWrap>
              <p>{data.description}</p>
              {'time' in data && <h5>{data.time}</h5>}
              <S.LocationWrap>
                <GoogleMapsIcon color="var(--DeepBlue)" />
                <p>{data.location}</p>
              </S.LocationWrap>
              {'etc' in data && <h5>{data.etc}</h5>}
            </S.TextItemWrap>
          </S.TextWrap>
        );
      })}
    </S.Container>
  );
};

export default BoothItem;
