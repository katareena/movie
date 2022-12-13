import React from 'react';
import './main-page.scss';
import Header from '../../components/header/header';
import Search from '../../components/search/search';
import Card from '../../components/card/card';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import MovieModal from '../../components/movie-modal/movie-modal';
import NotifyModal from '../../components/notify-modal/notify-modal';

export default function MainPage(): JSX.Element {
  return (
    <>
      <div className='page__top'>
        <Header />
        <Search />
        <Card />
      </div>

      <main className='page__medium'>
        <div className='page__medium-wrap'>
          <Catalog />
        </div>
      </main>

      <Footer />
      <MovieModal />
      <NotifyModal />
    </>
  );
}
