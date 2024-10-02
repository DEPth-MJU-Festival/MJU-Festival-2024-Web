import { NaviTapType } from '@/types/lostItem';
import * as S from '@styles/lostItem/LostItemContainer';
import { useState } from 'react';
import LostItemComponent from './LostItemComponent';
import LostItemNav from './LostItemNav';

const LostItemContainer = () => {
  const [naviTap, setNaviTap] = useState<NaviTapType>('의류');
  const DummyList = ['이름1', '이름2', '이름1', '이름2', '이름1', '이름2'];
  return (
    <S.Container>
      <LostItemNav naviTap={naviTap} setNaviTap={setNaviTap} />
      <S.ItemContainer>
        {DummyList.map((item, index) => (
          <LostItemComponent item={item} key={index} />
        ))}
      </S.ItemContainer>
    </S.Container>
  );
};

export default LostItemContainer;
