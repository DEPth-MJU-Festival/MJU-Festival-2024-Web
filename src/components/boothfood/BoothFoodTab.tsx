import * as S from '@styles/boothfood/BoothFoodTabStyle';
import { forwardRef, useState } from 'react';
import BoothTab from './BoothTab';
import FoodTab from './FoodTab';
import MapImg from '@images/boothfood/Map.png';

const BoothFoodTab = forwardRef<HTMLDivElement, { navigationHeight: number }>(
  ({ navigationHeight }, ref) => {
    const [selectedId, setSelectedId] = useState(0);

    return (
      <S.Container ref={ref}>
        <S.TabWrap>
          <S.TabItem
            $selected={selectedId === 0}
            $selectedId={0}
            onClick={() => setSelectedId(0)}
          >
            부스
          </S.TabItem>
          <S.TabItem
            $selected={selectedId === 1}
            $selectedId={1}
            onClick={() => setSelectedId(1)}
          >
            푸드트럭
          </S.TabItem>
        </S.TabWrap>
        <S.MapWrap>
          <img src={MapImg} width="100%" />
        </S.MapWrap>
        {selectedId === 0 && <BoothTab navigationHeight={navigationHeight} />}
        {selectedId === 1 && <FoodTab />}
      </S.Container>
    );
  },
);

export default BoothFoodTab;
