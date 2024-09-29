import * as S from '@styles/boothfood/BoothTabStyle';
import { useEffect, useRef, useState } from 'react';
import ChevronLeftIcon from '@icons/header/ChevronLeft.svg?react';
import { BoothItemList } from '@constants/boothfood';
import BoothItem from './BoothItem';
import NightBoothLongImg from '@images/boothfood/NightBooth/NightBoothLong.png';

const BoothTab = ({ navigationHeight }: { navigationHeight: number }) => {
  const [selectedId, setSelectedId] = useState(0);
  const headWrapRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (selectedId !== 0) {
      const currentRef = headWrapRefs.current[selectedId - 1];
      if (currentRef) {
        const headerHeight = navigationHeight + 64;
        const rect = currentRef.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY - headerHeight;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [navigationHeight, selectedId]);

  return (
    <S.Container>
      {BoothItemList.map((data, index) => {
        return (
          <div key={index}>
            <S.HeadWrap
              ref={el => (headWrapRefs.current[data.id - 1] = el)}
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
            {index === BoothItemList.length - 1 &&
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
