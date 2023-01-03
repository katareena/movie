import React, { useState, FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import './catalog.scss';
import Genres from '../genres/genres';
import Sorting from '../sorting/sorting';
import CatalogItem from '../catalog-item/catalog-item';
import MoviePropType from '../../types/movie-type';
import { MovieGenres, SortItems } from '../../constants/constants';
import { sortingMovies } from '../../utils/sorting-movies';

const propTypes = {
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
};

type CatalogProps = PropTypes.InferProps<typeof propTypes>;

const Catalog: FunctionComponent<CatalogProps> = ({ movies }): JSX.Element => {
  const [activeMovie, setActiveMovie] = useState<undefined | number>(undefined);
  const [activeGenre, setActiveGenre] = useState(MovieGenres[0]);
  const [activeSortingValue, setActiveSortingValue] = useState(SortItems[0]);

  const actualMovies = movies
    .filter((offer) =>
      activeGenre === MovieGenres[0] ? movies : offer.genre === activeGenre
    )
    .sort(sortingMovies(activeSortingValue));
  const numberMovies = actualMovies.length;

  return (
    <section className='catalog'>
      <h2 className='visually-hidden'>Catalog</h2>

      <div className='catalog__nav'>
        <Genres activeGenre={activeGenre} changeGenre={setActiveGenre} />
        <Sorting
          activeSortingValue={activeSortingValue}
          changeSortingValue={setActiveSortingValue}
        />
      </div>

      <p className='catalog__result-text'>
        <span>{numberMovies}</span> movies found <span> in </span>
      </p>

      <div className='catalog__list'>
        {actualMovies.map((movie) => (
          <CatalogItem
            movie={movie}
            key={movie.id}
            onMouseOver={() => setActiveMovie(movie.id)}
            onFocus={() => setActiveMovie(movie.id)}
            onMouseLeave={() => setActiveMovie(undefined)}
            activeMovie={activeMovie}
          />
        ))}
      </div>
    </section>
  );
};

Catalog.propTypes = propTypes;

export default Catalog;
