import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import './genres.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { MovieGenres } from '../../constants/constants';

const propTypes = {
  activeGenre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
};

type GenresProps = PropTypes.InferProps<typeof propTypes>;

const Genres: FunctionComponent<GenresProps> = ({
  activeGenre,
  changeGenre,
}): JSX.Element => {
  return (
    <div className='genres'>
      <ul className='genres__list'>
        {MovieGenres.map((genre: string) => (
          <li
            className={cn('genres__item', {
              'genres__item--active': activeGenre === genre,
            })}
            key={genre}
          >
            <Link
              className='genres__link'
              to='#'
              onClick={() => changeGenre(genre)}
            >
              {genre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Genres.propTypes = propTypes;

export default Genres;
