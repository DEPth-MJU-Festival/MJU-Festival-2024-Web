import * as S from '@styles/main/MainTabStyle';
import { MainText } from '@constants/main';
import { forwardRef } from 'react';

const MainTab = forwardRef<HTMLDivElement, { preloadImage: string }>(
  ({ preloadImage }, ref) => {
    return (
      <div ref={ref}>
        <img src={preloadImage} width="100%" />
        <S.TextWrap>{MainText}</S.TextWrap>
      </div>
    );
  },
);

export default MainTab;
