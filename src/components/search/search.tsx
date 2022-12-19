import React from 'react';
import './search.scss';

export default function SigninPage(): JSX.Element {
  return (
    <section className='search'>
      <div className='search__inner'>
        <h2 className='search__title'>FIND YOUR MOViE</h2>
        <form className='search__form' method='get' action='#'>
          <div className='search__feild'>
            <label className='visually-hidden' htmlFor='search'>
              search field
            </label>
            <input
              type='text'
              id='search'
              name='search'
              placeholder='What do you want to watch?'
            />
          </div>

          <button className='search__button' type='submit'>
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
