import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import './catalog-item.scss';
import { Link } from 'react-router-dom';
import Edit from '../edit/edit';
import MoviePropType from '../../types/movie-type';

const propTypes = {
  movie: MoviePropType,
};

type CatalogItemProps = PropTypes.InferProps<typeof propTypes>;

const CatalogItem: FunctionComponent<CatalogItemProps> = ({
  movie,
}): JSX.Element => {
  const { id, name, posterImage, genre, released } = movie;

  return (
    <article className='catalog__card'>
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

      <Edit />
    </article>
  );
};

CatalogItem.propTypes = propTypes;

export default CatalogItem;
