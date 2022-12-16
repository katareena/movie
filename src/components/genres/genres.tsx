import React from 'react';
import './genres.scss';
import { Link } from 'react-router-dom';
import { MovieGenres } from '../../constants/constants';

export default function Genres(): JSX.Element {
  return (
    <div className='genres'>
      <ul className='genres__list'>
        {MovieGenres.map((item: string) => (
          // genres__item--active
          <li className='genres__item' key={item}>
            <Link to='#' className='genres__link'>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
