import { LostItem } from '@/types/lostItem';
import * as S from '@styles/lostItem/LostItemComponent';

const LostItemComponent = ({ item }: { item: LostItem }) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={item.imageUrl} />
      </S.ImageContainer>
      <S.Name>{item.title}</S.Name>
    </S.Container>
  );
};

export default LostItemComponent;
