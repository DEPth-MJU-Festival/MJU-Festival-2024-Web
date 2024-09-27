import { Outlet } from 'react-router-dom';
import * as S from '@/styles/layout/LayoutStyle';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <S.Container>
      <Header />
      <Outlet />
      <S.FooterWrap>
        <Footer />
      </S.FooterWrap>
    </S.Container>
  );
};

export default Layout;
