import * as S from '@/styles/layout/HeaderStyle';
import LogoIcon from '@icons/header/Logo.svg?react';
import SaerLogoIcon from '@icons/header/SaerLogo.svg?react';
import ChevronLeftBigIcon from '@icons/header/ChevronLeftBig.svg?react';

const Header = () => {
  return (
    <S.Container>
      <LogoIcon />
      <S.RightWrap>
        <SaerLogoIcon />
        <ChevronLeftBigIcon color="var(--PaleYellow)" />
      </S.RightWrap>
    </S.Container>
  );
};

export default Header;
