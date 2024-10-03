import * as S from '@styles/boothfood/BoothItemStyle';
import GoogleMapsIcon from '@icons/header/GoogleMaps.svg?react';
import { useState } from 'react';

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
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <S.Container>
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '17.44%',
        }}
      >
        <img
          src={data.img}
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
