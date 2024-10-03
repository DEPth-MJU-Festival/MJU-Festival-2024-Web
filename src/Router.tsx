import Layout from '@components/layout/Layout';
import MainPage from '@pages/MainPage';
import NotFoundPage from '@pages/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoticeDetailPage from './pages/NoticeDetailPage';
import NoticePage from './pages/NoticePage';
import SaeroPage from './pages/SaeroPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/noticeDetail" element={<NoticeDetailPage />} />
          <Route path="/saero" element={<SaeroPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
