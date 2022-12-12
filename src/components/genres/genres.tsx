import React from 'react';
import './genres.scss';
import { Link } from 'react-router-dom';

export default function Genres(): JSX.Element {
  return (
    <div className='genres'>
      <ul className='genres__list'>
        <li className='genres__item genres__item--active'>
          <Link to='#' className='genres__link'>
            All
          </Link>
        </li>
        <li className='genres__item'>
          <Link to='#' className='genres__link'>
            Documentary
          </Link>
        </li>
        <li className='genres__item'>
          <Link to='#' className='genres__link'>
            Comedies
          </Link>
        </li>
        <li className='genres__item'>
          <Link to='#' className='genres__link'>
            Horror
          </Link>
        </li>
        <li className='genres__item'>
          <Link to='#' className='genres__link'>
            Crime
          </Link>
        </li>
      </ul>
    </div>
  );
}
