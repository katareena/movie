import React from 'react';
import './notify-modal.scss';

export default function NotifyModal(): JSX.Element {
  return (
    <div className='modal'>
      <div className='modal__wrap notify'>
        <div className='notify__icon'></div>
        <h2 className='notify__title'>congratulations !</h2>
        <p className='notify__text'>
          The movie has been added to database successfully
        </p>
        <button
          className='close'
          type='button'
          aria-label='Close form'
        ></button>
      </div>
    </div>
  );
}
