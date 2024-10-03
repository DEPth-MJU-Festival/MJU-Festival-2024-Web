import Layout from '@components/layout/Layout';
import MainPage from '@pages/MainPage';
import NotFoundPage from '@pages/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoticePage from './pages/NoticePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/notice" element={<NoticePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
