import * as S from '@styles/boothfood/BoothTabStyle';
import { useState } from 'react';
import ChevronLeftIcon from '@icons/header/ChevronLeft.svg?react';
import { BoothItemList } from '@constants/boothfood';
import BoothItem from './BoothItem';
import NightBoothLongImg from '@images/boothfood/NightBooth/NightBoothLong.png';

const BoothTab = () => {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <S.Container>
      {BoothItemList.map((data, index) => {
        return (
          <div key={index}>
            <S.HeadWrap
              $selected={selectedId === data.id}
              onClick={() => {
                if (selectedId === data.id) {
                  setSelectedId(0);
                } else {
                  setSelectedId(data.id);
                }
              }}
            >
              <h2>{data.header}</h2>
              <ChevronLeftIcon
                color={
                  selectedId === data.id
                    ? 'var(--SoftBlue)'
                    : 'var(--BlueBlack)'
                }
              />
            </S.HeadWrap>
            {selectedId === data.id && (
              <S.BodyWrap>
                {data.item.map((data, index) => {
                  return <BoothItem key={index} data={data} />;
                })}
              </S.BodyWrap>
            )}
            {index === BoothItemList.length - 1 && // 마지막 인덱스일 때만 렌더링
              (selectedId !== data.id ? (
                <div
                  style={{
                    height: '60px',
                    borderTop: '1.5px solid var(--SoftBlue)',
                  }}
                ></div>
              ) : (
                <img src={NightBoothLongImg} width="100%" />
              ))}
          </div>
        );
      })}
    </S.Container>
  );
};

export default BoothTab;
