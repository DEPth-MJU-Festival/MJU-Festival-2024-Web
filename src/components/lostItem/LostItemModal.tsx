import { LostItem } from '@/types/lostItem';
import * as S from '@styles/lostItem/LostItemModal';

const LostItemModal = ({
  item,
  onDelete,
}: {
  item: LostItem;
  onDelete: () => void;
}) => {
  return (
    <S.Container>
      <S.Overlay onClick={onDelete} />
      <S.ModalContainer>
        <S.ImageContainer>
          <S.Image src={item.imageUrl} />
        </S.ImageContainer>
        <S.Name>{item.title}</S.Name>
      </S.ModalContainer>
    </S.Container>
  );
};

export default LostItemModal;
