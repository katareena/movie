import React from 'react';
import './add-button.scss';

export default function AddButton(): JSX.Element {
  return (
    <div className='add'>
      <button className='add__button' type='button'>
        <span className='add__button-mark'></span>
        <span className='add__button-text'>add movie</span>
      </button>
    </div>
  );
}
