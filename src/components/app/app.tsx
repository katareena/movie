import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SigninPage from '../../pages/signin-page/signin-page';
import { AppRoute } from '../../constants/constants';
import { MovieType } from '../../types/movie-type';

type AppProps = {
  movies: MovieType[];
};

const App = ({ movies }: AppProps): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage movies={movies} />} />
        <Route path={AppRoute.Signin} element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
