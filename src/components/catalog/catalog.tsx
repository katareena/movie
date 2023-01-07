import React, { useState, FunctionComponent } from 'react';
import './catalog.scss';
import { useGlobalContext } from '../../hooks/context';
import Genres from '../genres/genres';
import Sorting from '../sorting/sorting';
import CatalogItem from '../catalog-item/catalog-item';
import { MovieGenres, SortItems } from '../../constants/constants';
import { sortingMovies } from '../../utils/sorting-movies';
// import { MovieType } from '../../types/movie-type';

const Catalog: FunctionComponent = (): JSX.Element => {
  const [activeGenre, setActiveGenre] = useState(MovieGenres[0]);
  const [activeSortingValue, setActiveSortingValue] = useState(SortItems[0]);
  const { movies, isLoading } = useGlobalContext();

  // useEffect(() => {
  //   const movie: undefined | MovieType = movies.filter((movie) => movie.id === activeId)[0];
  //   setActiveMovie(movie);
  // }, [activeId, movies, setActiveMovie]);

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

      {isLoading ? (
        <p className='page__loading'>Loading...</p>
      ) : (
        <>
          <p className='catalog__result-text'>
            <span>
              <b>{numberMovies}</b> movies found
            </span>
          </p>

          <div className='catalog__list'>
            {actualMovies.map((movie) => (
              <CatalogItem movie={movie} key={movie.id} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

// Catalog.propTypes = propTypes;

export default Catalog;
