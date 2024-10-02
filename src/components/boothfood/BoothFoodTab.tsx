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
            <img src={preloadImage} width="100%" />
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
