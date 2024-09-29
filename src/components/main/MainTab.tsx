import * as S from '@styles/main/MainTabStyle';
import PosterImg from '@images/main/Poster.png';
import { MainText } from '@constants/main';
import { forwardRef } from 'react';

const MainTab = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <img src={PosterImg} width="100%" />
      <S.TextWrap>{MainText}</S.TextWrap>
    </div>
  );
});

export default MainTab;
