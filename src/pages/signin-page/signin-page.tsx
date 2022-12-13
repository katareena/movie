import React from 'react';
import Footer from '../../components/footer/footer';

export default function SigninPage(): JSX.Element {
  return (
    <div className='page__sign'>
      <div className='page__sign-wrap'>
        <main>
          <section className='form form--signin'>
            <div className='form__title'>
              <h2>log in</h2>
            </div>

            <form
              className='form__form'
              action='https://echo.htmlacademy.ru'
              method='post'
            >
              <div className='field'>
                <label className='field__label' htmlFor='user-id'>
                  USER ID*
                </label>
                <input
                  className='field__input'
                  id='user-id'
                  type='email'
                  name='user-id'
                  autoComplete='off'
                  placeholder='example@email.com'
                />
              </div>

              <div className='field'>
                <label className='field__label' htmlFor='user-password'>
                  PASSWORD*
                </label>
                <input
                  className='field__input'
                  id='user-password'
                  type='number'
                  name='user-password'
                  autoComplete='off'
                  minLength={6}
                  placeholder='******'
                  pattern='[^[0-9a-zA-Z]+$]{6}'
                />
                <span className='field__icon'></span>
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

            <div className='form__message'>
              <p>*Mandatory</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
