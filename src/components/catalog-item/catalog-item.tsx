import React, { FunctionComponent } from 'react';
import './catalog-item.scss';
import { useGlobalContext } from '../../hooks/context';
import { Link } from 'react-router-dom';
import Edit from '../edit/edit';
import PropTypes from 'prop-types';
import { MoviePropTypes, MovieType } from '../../types/movie-type';

const propTypes = {
  movie: MoviePropTypes,
};

type CatalogItemProps = PropTypes.InferProps<typeof propTypes>;

const CatalogItem: FunctionComponent<CatalogItemProps> = ({
  movie,
}): JSX.Element => {
  const { id, name, posterImage, genre, released } = movie;
  const { activeId, setActiveId, setIsCardOpen, movies, setActiveMovie } =
    useGlobalContext();

  function handlerClick(evt: React.MouseEvent<HTMLElement>) {
    evt.preventDefault();
    const movie: undefined | MovieType = movies.filter(
      (movie) => movie.id === activeId
    )[0];
    setActiveMovie(movie);
    setIsCardOpen(true);
  }

  return (
    <article className='catalog__card' onMouseOver={() => setActiveId(id)}>
      <Link
        className='catalog__card-poster'
        to={`movies/${id}`}
        aria-label='go to the movie card'
        onClick={handlerClick}
      >
        <img src={posterImage} alt='poster of movie' />
      </Link>
      <div className='catalog__card-info'>
        <div className='catalog__card-box'>
          <h3 className='catalog__card-title'>{name}</h3>
          <span className='catalog__card-release'>{released}</span>
        </div>
        <p className='catalog__card-genres'>{genre}</p>
      </div>

      {activeId === id && <Edit />}
    </article>
  );
};

CatalogItem.propTypes = propTypes;

export default CatalogItem;
