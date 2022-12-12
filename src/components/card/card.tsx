import React from 'react';
import './card.scss';

export default function Card(): JSX.Element {
  return (
    <section className='card visually-hidden'>
      <div className='card__inner'>
        <div className='card__poster'></div>
        <div className='card__info'>
          <div className='card__box'>
            <h2 className='card__title'>Pulp Fiction</h2>
            <div className='card__rating'>
              <span>8.9</span>
            </div>
          </div>

          <p className='card__genre'>Action & Adventure</p>

          <p className='card__characteristic'>
            <span>1994</span>
            <span>2h 34min</span>
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
}
