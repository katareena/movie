import React from 'react';
import './catalog.scss';
import Genres from '../genres/genres';
import Sorting from '../sorting/sorting';
import CatalogItem from '../catalog-item/catalog-item';
import { MovieType } from '../../types/movie-type';

type CatalogProps = {
  movies: MovieType[];
};

export default function Catalog({ movies }: CatalogProps): JSX.Element {
  const numberMovies = movies.length;

  return (
    <section className='catalog'>
      <h2 className='visually-hidden'>Catalog</h2>

      <div className='catalog__nav'>
        <Genres />
        <Sorting />
      </div>

      <p className='catalog__result-text'>
        <span>{numberMovies}</span> movies found
      </p>

      <div className='catalog__list'>
        {movies.map((movie: MovieType) => (
          <CatalogItem movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}
