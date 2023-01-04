import React, {
  FunctionComponent,
  MouseEventHandler,
  FocusEventHandler,
} from 'react';
import './catalog-item.scss';
import { Link } from 'react-router-dom';
import Edit from '../edit/edit';
// import PropTypes from 'prop-types';
// import MoviePropType from '../../types/movie-type';
import { MovieType } from '../../types/movie-type';

// const propTypes = {
//   movie: MoviePropType,
//   onMouseOver: PropTypes.func,
//   onMouseLeave: PropTypes.func,
//   onFocus: PropTypes.func,
//   // activeMovie: PropTypes.oneOfType([
//   //   PropTypes.undefined,
//   //   PropTypes.number,
//   // ])
//   activeMovie: number,
// }

type CatalogItemProps = {
  movie: MovieType;
  onMouseOver: MouseEventHandler<HTMLElement>;
  onMouseLeave: MouseEventHandler<HTMLElement>;
  onFocus: FocusEventHandler<HTMLElement>;
  activeMovie: number | undefined;
};

// type CatalogItemProps = PropTypes.InferProps<typeof propTypes>;

const CatalogItem: FunctionComponent<CatalogItemProps> = ({
  movie,
  onMouseOver,
  onMouseLeave,
  onFocus,
  activeMovie,
}): JSX.Element => {
  const { id, name, posterImage, genre, released } = movie;

  return (
    <article
      className='catalog__card'
      onFocus={onFocus}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <Link
        className='catalog__card-poster'
        to={`/movies/${id}`}
        aria-label='go to the movie card'
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

      {activeMovie === id && <Edit />}
    </article>
  );
};

// CatalogItem.propTypes = propTypes;

export default CatalogItem;
