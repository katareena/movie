import React from 'react';
import ArrowSvgComponent from '../../assets/images/arrow-dropdown-icon.svg';
import CalendarSvgComponent from '../../assets/images/calendar-icon.svg';

export default function MovieModal(): JSX.Element {
  return (
    <div className='modal'>
      <section className='modal__wrap form form--movie'>
        <div className='form__title'>
          <h2>ADD MOVIE</h2>
        </div>

        <form className='form__form' action='#' method='post'>
          <div className='form__grid'>
            <div className='field'>
              <label className='field__label' htmlFor='movie-title'>
                TITLE
              </label>
              <input
                className='field__input'
                id='movie-title'
                type='text'
                name='movie-title'
                autoComplete='off'
                placeholder='Title'
              />
            </div>

            <div className='field'>
              <label className='field__label' htmlFor='movie-release'>
                RELEASE DATE
              </label>
              <input
                className='field__input'
                id='movie-release'
                type='number'
                name='movie-release'
                autoComplete='off'
                placeholder='Select date'
              />
              <button className='field__btn'>
                <CalendarSvgComponent />
              </button>

              <div className='dropdown dropdown--opened'>
                <ul className='dropdown__options'>
                  <li className='dropdown__option dropdown__option--active'>
                    Edit
                  </li>
                  <li className='dropdown__option'>Delete</li>
                </ul>
              </div>
            </div>

            <div className='field'>
              <label className='field__label' htmlFor='movie-url'>
                movie url
              </label>
              <input
                className='field__input'
                id='movie-url'
                type='text'
                name='movie-url'
                autoComplete='off'
                placeholder='https://'
              />
            </div>

            <div className='field'>
              <label className='field__label' htmlFor='movie-rating'>
                RATING
              </label>
              <input
                className='field__input'
                id='movie-rating'
                type='number'
                name='movie-rating'
                autoComplete='off'
                placeholder='7.8'
                pattern='[^[0-9]]'
              />
            </div>

            <div className='field'>
              <label className='field__label' htmlFor='movie-genre'>
                genre
              </label>
              <input
                className='field__input'
                id='movie-genre'
                type='text'
                name='movie-genre'
                placeholder='Select genre'
              />
              <button className='field__btn'>
                <ArrowSvgComponent />
              </button>
              <p className='field__text'>
                Select at least one genre to proceed
              </p>

              <div className='dropdown'>
                <ul className='dropdown__options'>
                  <li className='field'>
                    <input
                      className='field__input
                      field__input--checkbox'
                      type='checkbox'
                      name='genre'
                      id='genre-1'
                    />
                    <label
                      className='field__label field__label--checkbox'
                      htmlFor='genre-1'
                    >
                      Crime
                    </label>
                  </li>

                  <li className='field'>
                    <input
                      className='field__input field__input--checkbox'
                      type='checkbox'
                      name='genre'
                      id='genre-2'
                    />
                    <label
                      className='field__label field__label--checkbox'
                      htmlFor='genre-2'
                    >
                      Documentary
                    </label>
                  </li>

                  <li className='field'>
                    <input
                      className='field__input field__input--checkbox'
                      type='checkbox'
                      name='genre'
                      id='genre-3'
                    />
                    <label
                      className='field__label field__label--checkbox'
                      htmlFor='genre-3'
                    >
                      Horror
                    </label>
                  </li>

                  <li className='field'>
                    <input
                      className='field__input field__input--checkbox'
                      type='checkbox'
                      name='genre'
                      id='genre-4'
                    />
                    <label
                      className='field__label field__label--checkbox'
                      htmlFor='genre-4'
                    >
                      Comedy
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className='field'>
              <label className='field__label' htmlFor='movie-runtime'>
                RUNTIME
              </label>
              <input
                className='field__input'
                id='movie-runtime'
                type='number'
                name='movie-runtime'
                placeholder='Minutes'
              />
            </div>
          </div>

          <div className='field'>
            <label className='field__label' htmlFor='user-textarea'>
              OVERVIEW
            </label>
            <textarea
              name='user-textarea'
              id='user-textarea'
              cols={30}
              rows={6}
              placeholder='Movie description'
            ></textarea>
          </div>

          <div className='form__actions'>
            <button className='form__reset' type='reset'>
              reset
            </button>
            <button className='form__submit' type='submit'>
              log in
            </button>
          </div>
        </form>

        <button
          className='close'
          type='button'
          aria-label='close the form'
        ></button>
      </section>
    </div>
  );
}
