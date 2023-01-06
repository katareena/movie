import React, { FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SigninPage from '../../pages/signin-page/signin-page';
import { AppRoute } from '../../constants/constants';
import { AppProvider } from '../../hooks/context';

const App: FunctionComponent = (): JSX.Element => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage />} />
          <Route path={AppRoute.Signin} element={<SigninPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
