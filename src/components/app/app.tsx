import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SigninPage from '../../pages/signin-page/signin-page';
import { AppRoute } from '../../constants/constants';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Root} element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}
