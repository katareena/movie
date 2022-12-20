import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SigninPage from '../../pages/signin-page/signin-page';
import { AppRoute } from '../../constants/constants';
import MoviePropType from '../../types/movie-type';

const propTypes = {
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
};

type AppProps = PropTypes.InferProps<typeof propTypes>;

const App: FunctionComponent<AppProps> = ({ movies }): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage movies={movies} />} />
        <Route path={AppRoute.Signin} element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
};

App.propTypes = propTypes;

export default App;
