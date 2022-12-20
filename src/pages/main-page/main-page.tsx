import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/header';
import Search from '../../components/search/search';
import Card from '../../components/card/card';
import ErrorBoundary from '../../components/error-boundary/error-boundary';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import MovieModal from '../../components/movie-modal/movie-modal';
import NotifyModal from '../../components/notify-modal/notify-modal';
import MoviePropType from '../../types/movie-type';

const propTypes = {
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
};

type MainPageProps = PropTypes.InferProps<typeof propTypes>;

const MainPage: FunctionComponent<MainPageProps> = ({
  movies,
}): JSX.Element => {
  return (
    <div className='page'>
      <div className='page__top'>
        <Header />
        <Search />
        <Card />
      </div>

      <main className='page__medium'>
        <div className='page__medium-wrap'>
          <ErrorBoundary movies={movies}>
            <Catalog movies={movies} />
          </ErrorBoundary>
        </div>
      </main>

      <Footer />
      <MovieModal />
      <NotifyModal />
    </div>
  );
};

MainPage.propTypes = propTypes;

export default MainPage;
