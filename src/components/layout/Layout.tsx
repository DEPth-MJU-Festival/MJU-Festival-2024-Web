import { Outlet } from 'react-router-dom';
import * as S from '@styles/layout/LayoutStyle';
import BannerImg from '@images/main/Banner.png';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';

const Layout = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setViewportHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Container style={{ minHeight: viewportHeight }}>
      <Header />
      <img src={BannerImg} width="100%" />
      <Outlet />
      <S.FooterWrap>
        <Footer />
      </S.FooterWrap>
    </S.Container>
  );
};

export default Layout;
