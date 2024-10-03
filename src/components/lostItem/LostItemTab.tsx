import * as S from '@styles/lostItem/LostItemTab';
import { forwardRef } from 'react';
import LostItemBanner from './LostItemBanner';
import LostItemContainer from './LostItemContainer';

const LostItemTab = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <S.Container ref={ref}>
      <LostItemBanner />
      <LostItemContainer />
    </S.Container>
  );
});

export default LostItemTab;
