import React from 'react';
import './add-button.scss';
import { useGlobalContext } from '../../hooks/context';

const AddButton = (): JSX.Element => {
  const { setIsMovieModalOpen } = useGlobalContext();

  function handleClick() {
    setIsMovieModalOpen(true);
  }

  return (
    <button className='add' type='button' onClick={handleClick}>
      <span className='add__button-mark'></span>
      <span className='add__button-text'>add movie</span>
    </button>
  );
};

export default AddButton;
