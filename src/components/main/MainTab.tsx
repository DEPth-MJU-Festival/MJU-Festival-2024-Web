import * as S from '@styles/main/MainTabStyle';
import PosterImg from '@images/main/Poster.png';
import { MainText } from '@/constants/main';

const MainTab = () => {
  return (
    <>
      <img src={PosterImg} width="100%" />
      <S.TextWrap>{MainText}</S.TextWrap>
    </>
  );
};

export default MainTab;
