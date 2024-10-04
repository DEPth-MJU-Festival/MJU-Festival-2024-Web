import { LostItem } from '@/types/lostItem';
import * as S from '@styles/lostItem/LostItemComponent';
import { useState } from 'react';
import LostItemModal from './LostItemModal';

const LostItemComponent = ({ item }: { item: LostItem }) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <S.Container>
      {isShowModal && (
        <LostItemModal item={item} onDelete={() => setIsShowModal(false)} />
      )}
      <S.ImageContainer onClick={() => setIsShowModal(true)}>
        <S.Image src={item.imageUrl} />
      </S.ImageContainer>
      <S.Name>{item.title}</S.Name>
    </S.Container>
  );
};

export default LostItemComponent;
