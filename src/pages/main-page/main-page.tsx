import React, { FunctionComponent } from 'react';
import { useGlobalContext } from '../../hooks/context';
import Header from '../../components/header/header';
import ErrorBoundary from '../../components/error-boundary/error-boundary';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import MovieModal from '../../components/movie-modal/movie-modal';
import NotifyModal from '../../components/notify-modal/notify-modal';
import Search from '../../components/search/search';
import Card from '../../components/card/card';
import { defaultFormValue } from '../../constants/constants';

const MainPage: FunctionComponent = (): JSX.Element => {
  const {
    isEdit,
    isNotifyModalOpen,
    isMovieModalOpen,
    isCardOpen,
    activeMovie,
  } = useGlobalContext();

  const changeableMovie = isEdit ? activeMovie : defaultFormValue;

  return (
    <div className='page'>
      <div className='page__top'>
        <Header />

        {isCardOpen && activeMovie ? <Card movie={activeMovie} /> : <Search />}
      </div>

      <main className='page__medium'>
        <div className='page__medium-wrap'>
          <ErrorBoundary>
            <Catalog />
          </ErrorBoundary>
        </div>
      </main>

      <Footer />

      {isNotifyModalOpen && <NotifyModal />}
      {isMovieModalOpen && <MovieModal movie={changeableMovie} />}
    </div>
  );
};

export default MainPage;
