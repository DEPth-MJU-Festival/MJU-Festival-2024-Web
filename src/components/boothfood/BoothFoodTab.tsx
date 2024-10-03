import * as S from '@styles/boothfood/BoothFoodTabStyle';
import { forwardRef, useEffect, useState } from 'react';
import BoothTab from './BoothTab';
import FoodTab from './FoodTab';
import TabBar from '../common/TapBar';
import { BoothItemList, FoodItemList } from '@/constants/boothfood';

const BoothFoodTab = forwardRef<
  HTMLDivElement,
  { preloadImage: string; navigationHeight: number }
>(({ preloadImage, navigationHeight }, ref) => {
  const [selectedId, setSelectedId] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = [
      ...BoothItemList.flatMap(item => item.item.map(data => data.img)),
      ...FoodItemList.map(data => data.img),
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div ref={ref}>
      <TabBar
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        tabTitles={['부스', '푸드트럭']}
        topContent={
          <S.MapWrap>
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: '81.25%',
              }}
            >
              <img
                src={preloadImage}
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
          </S.MapWrap>
        }
        tabContents={[
          <BoothTab navigationHeight={navigationHeight} />,
          <FoodTab />,
        ]}
      />
    </div>
  );
});

export default BoothFoodTab;
