import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import MoviePropType from '../../types/movie-type';
import './card.scss';

const propTypes = {
  movie: MoviePropType,
};

type CardProps = PropTypes.InferProps<typeof propTypes>;

const Card: FunctionComponent<CardProps> = ({ movie }): JSX.Element => {
  const { name, rating, runTime, genre, released, posterImage } = movie;

  return (
    <section className='card'>
      <div className='card__inner'>
        <img className='card__poster' src={posterImage} alt='poster of movie' />
        <div className='card__info'>
          <div className='card__box'>
            <h2 className='card__title'>{name}</h2>
            <span className='card__rating'>{rating}</span>
          </div>

          <p className='card__genre'>{genre}</p>

          <p className='card__characteristic'>
            <span>{released}</span>
            <span>{runTime}min</span>
          </p>
          <p className='card__description'>
            Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta)
            are two hit men who are out to retrieve a suitcase stolen from their
            employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also
            asked Vincent to take his wife Mia (Uma Thurman) out a few days
            later when Wallace himself will be out of town. Butch Coolidge
            (Bruce Willis) is an aging boxer who is paid by Wallace to lose his
            fight. The lives of these seemingly unrelated people are woven
            together comprising of a series of funny, bizarre and uncalled-for
            incidents.—Soumitra
          </p>
        </div>
      </div>
    </section>
  );
};

Card.propTypes = propTypes;

export default Card;
