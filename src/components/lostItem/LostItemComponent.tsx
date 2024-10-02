import DummyLostImage from '@assets/images/lostItem/DummyLostImage.svg?react';
import * as S from '@styles/lostItem/LostItemComponent';

// const LostItemComponent = ({ item }: { item: LostItem }) => {
const LostItemComponent = ({ item }: { item: string }) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <DummyLostImage width={'100%'} height={'132px'} />
      </S.ImageContainer>
      <S.Name>{item}</S.Name>
    </S.Container>
  );
};

export default LostItemComponent;
