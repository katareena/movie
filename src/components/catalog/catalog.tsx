import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import './catalog.scss';
import Genres from '../genres/genres';
import Sorting from '../sorting/sorting';
import CatalogItem from '../catalog-item/catalog-item';
import MovieType from '../../types/movie-type';

const propTypes = {
  movies: PropTypes.arrayOf(MovieType).isRequired,
};

type CatalogProps = PropTypes.InferProps<typeof propTypes>;

const Catalog: FunctionComponent<CatalogProps> = ({ movies }): JSX.Element => {
  const numberMovies = movies?.length;

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
        {movies.map((movie) => (
          <CatalogItem movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};

Catalog.propTypes = propTypes;

export default Catalog;
