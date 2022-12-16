import React from 'react';
import './catalog-item.scss';
import { Link } from 'react-router-dom';
import Edit from '../edit/edit';
import { MovieType } from '../../types/movie-type';

type CatalogItemProps = {
  movie: MovieType;
};

export default function CatalogItem({ movie }: CatalogItemProps): JSX.Element {
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
          <div className='catalog__card-release'>
            <span>{released}</span>
          </div>
        </div>
        <p className='catalog__card-genres'>{genre}</p>
      </div>

      <Edit />
    </article>
  );
}
