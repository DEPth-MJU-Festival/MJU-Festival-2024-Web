import { Outlet } from 'react-router-dom';
import * as S from '@/styles/layout/LayoutStyle';
import BannerImg from '@images/main/Banner.png';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <S.Container>
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
