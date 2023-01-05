import React, { FormEvent, FunctionComponent, useState } from 'react';
import PropTypes from 'prop-types';
import MoviePropType from '../../types/movie-type';
import cn from 'classnames';
import { useGlobalContext } from '../../hooks/context';
import { defaultFormValue } from '../../constants/constants';
import ArrowSvgComponent from '../../assets/images/arrow-dropdown-icon.svg';
import CalendarSvgComponent from '../../assets/images/calendar-icon.svg';

const propTypes = {
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
};

type MovieModalProps = PropTypes.InferProps<typeof propTypes>;

const MovieModal: FunctionComponent<MovieModalProps> = ({
  movies,
}): JSX.Element => {
  const [isGenreDropdownOpen, setIsGenreDropdownOpen] =
    useState<boolean>(false);
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState<boolean>(false);
  const {
    isEdit,
    isMovieModalOpen,
    setIsMovieModalOpen,
    setIsEdit,
    setIsNotifyModalOpen,
    activeMovie,
  } = useGlobalContext();

  const changeableMovie = isEdit
    ? movies.filter((movie) => movie.id === activeMovie)[0]
    : defaultFormValue;
  const { name, rating, runTime, genre, released, posterImage } =
    changeableMovie;

  function handleClose() {
    setIsMovieModalOpen(false);
    setTimeout(() => setIsEdit(false), 2000);
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
  }

  function handleClick() {
    setIsMovieModalOpen(false);
    setIsNotifyModalOpen(true);
  }

  return (
    <div className={cn('modal', { 'modal--show': isMovieModalOpen })}>
      <section className='modal__wrap form form--movie'>
        <div className='form__title'>
          <h2>{isEdit ? 'EDIT MOVIE' : 'ADD MOVIE'}</h2>
        </div>

        <form
          className='form__form'
          action='#'
          method='post'
          onSubmit={handleSubmit}
        >
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
                defaultValue={name}
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
                defaultValue={released}
              />
              <button
                className='field__btn'
                onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
              >
                <CalendarSvgComponent />
              </button>

              <div
                className={cn('dropdown', {
                  'dropdown--opened': isDateDropdownOpen,
                })}
              >
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
                defaultValue={posterImage}
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
                defaultValue={rating}
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
                defaultValue={genre}
              />
              <button
                className='field__btn'
                onClick={() => setIsGenreDropdownOpen(!isGenreDropdownOpen)}
              >
                <ArrowSvgComponent />
              </button>
              <p className='field__text visually-hidden'>
                Select at least one genre to proceed
              </p>

              <div
                className={cn('dropdown', {
                  'dropdown--opened': isGenreDropdownOpen,
                })}
              >
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
                defaultValue={runTime}
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
            <button
              className='form__submit'
              type='submit'
              onClick={handleClick}
            >
              submit
            </button>
          </div>
        </form>

        <button
          className='close'
          type='button'
          aria-label='close the form'
          onClick={handleClose}
        ></button>
      </section>
    </div>
  );
};

export default MovieModal;
