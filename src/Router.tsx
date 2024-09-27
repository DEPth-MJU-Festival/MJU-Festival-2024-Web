import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import Layout from '@components/layout/Layout';
import NotFoundPage from '@pages/NotFoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
