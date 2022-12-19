import React from 'react';
import './add-button.scss';

const AddButton = (): JSX.Element => {
  return (
    <button className='add' type='button'>
      <span className='add__button-mark'></span>
      <span className='add__button-text'>add movie</span>
    </button>
  );
};

export default AddButton;
