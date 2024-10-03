import { useGetitems } from '@/hooks/item';
import { NaviTapType } from '@/types/lostItem';
import { mapToItemCategory } from '@/utils/mapToItemCategory';
import * as S from '@styles/lostItem/LostItemContainer';
import { useEffect, useState } from 'react';
import LostItemComponent from './LostItemComponent';
import LostItemNav from './LostItemNav';

const LostItemContainer = () => {
  const [naviTap, setNaviTap] = useState<NaviTapType>('의류');

  const { data, refetch } = useGetitems(mapToItemCategory(naviTap));
  useEffect(() => {
    refetch();
  }, [naviTap]);
  const ItemList = data?.data.information || [];

  return (
    <S.Container>
      <LostItemNav naviTap={naviTap} setNaviTap={setNaviTap} />
      <S.ItemContainer>
        {ItemList.map((item, index) => (
          <LostItemComponent item={item} key={index} />
        ))}
      </S.ItemContainer>
    </S.Container>
  );
};

export default LostItemContainer;
