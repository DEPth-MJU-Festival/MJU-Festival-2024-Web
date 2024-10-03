import { Outlet } from 'react-router-dom';
import * as S from '@styles/layout/LayoutStyle';
import BannerImg from '@images/main/Banner.png';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';

const Layout = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isLoaded, setIsLoaded] = useState(false);

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
      <div
        style={{ position: 'relative', width: '100%', paddingTop: '51.28%' }}
      >
        <img
          src={BannerImg}
          onLoad={() => setIsLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
          }}
        />
      </div>
      <Outlet />
      <S.FooterWrap>
        <Footer />
      </S.FooterWrap>
    </S.Container>
  );
};

export default Layout;
