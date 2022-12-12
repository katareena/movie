import React from 'react';
import './catalog-item.scss';
import { Link } from 'react-router-dom';
import Edit from '../edit/edit';

export default function CatalogItem(): JSX.Element {
  return (
    <article className='catalog__card'>
      <Link
        className='catalog__card-poster'
        to={`/movies/someId`}
        aria-label='go to the movie card'
      >
        <img src='#' alt='poster of movie' />
      </Link>
      <div className='catalog__card-info'>
        <div className='catalog__card-box'>
          <h3 className='catalog__card-title'>Pulp Fiction</h3>
          <div className='catalog__card-release'>
            <span>1994</span>
          </div>
        </div>
        <p className='catalog__card-genres'>Action & Adventure</p>
      </div>

      <Edit />
    </article>
  );
}
