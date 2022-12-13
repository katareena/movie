import React from 'react';
import './notify-modal.scss';

export default function NotifyModal(): JSX.Element {
  return (
    // modal--show
    <div className='modal'>
      <div className='modal__wrap notify'>
        <div className='notify__icon'></div>
        <h2 className='notify__title'>congratulations !</h2>
        {/* <h2 className='notify__title'>Delete MOVIE</h2> */}
        <p className='notify__text'>
          The movie has been added to database successfully
        </p>
        {/* <p className='notify__text'>
          Are you sure you want to delete this movie?
        </p> */}
        {/* <button className='notify__button' type='submit'>
          confirm
        </button> */}
        <button
          className='close'
          type='button'
          aria-label='Close form'
        ></button>
      </div>
    </div>
  );
}
