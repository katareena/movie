import React from 'react';
import Header from '../../components/header/header';
import Search from '../../components/search/search';
import Card from '../../components/card/card';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import MovieModal from '../../components/movie-modal/movie-modal';
import NotifyModal from '../../components/notify-modal/notify-modal';
import { MovieType } from '../../types/movie-type';

type MainPageProps = {
  movies: MovieType[];
};

export default function MainPage({ movies }: MainPageProps): JSX.Element {
  return (
    <>
      <div className='page__top'>
        <Header />
        <Search />
        <Card />
      </div>

      <main className='page__medium'>
        <div className='page__medium-wrap'>
          <Catalog movies={movies} />
        </div>
      </main>

      <Footer />
      <MovieModal />
      <NotifyModal />
    </>
  );
}
