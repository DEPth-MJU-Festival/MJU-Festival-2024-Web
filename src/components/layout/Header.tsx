import ChevronLeftBigIcon from '@icons/header/ChevronLeftBig.svg?react';
import LogoIcon from '@icons/logo/Logo.svg?react';
import SaerLogoIcon from '@icons/logo/SaerLogo.svg?react';
import * as S from '@styles/layout/HeaderStyle';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <LogoIcon
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          navigate('/');
        }}
      />
      <S.RightWrap
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          navigate('/saero');
        }}
      >
        <SaerLogoIcon />
        <ChevronLeftBigIcon color="var(--PaleYellow)" />
      </S.RightWrap>
    </S.Container>
  );
};

export default Header;
