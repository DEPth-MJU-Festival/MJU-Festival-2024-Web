import * as S from '@styles/boothfood/BoothFoodTabStyle';
import { forwardRef, useState } from 'react';
import BoothTab from './BoothTab';
import FoodTab from './FoodTab';
import MapImg from '@images/boothfood/Map.png';
import TabBar from '../common/TapBar';

const BoothFoodTab = forwardRef<HTMLDivElement, { navigationHeight: number }>(
  ({ navigationHeight }, ref) => {
    const [selectedId, setSelectedId] = useState(0);

    return (
      <div ref={ref}>
        <TabBar
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          tabTitles={['부스', '푸드트럭']}
          topContent={
            <S.MapWrap>
              <img src={MapImg} width="100%" />
            </S.MapWrap>
          }
          tabContents={[
            <BoothTab navigationHeight={navigationHeight} />,
            <FoodTab />,
          ]}
        />
      </div>
    );
  },
);

export default BoothFoodTab;
