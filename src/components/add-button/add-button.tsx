import React from 'react';
import './add-button.scss';
import { useGlobalContext } from '../../hooks/context';

const AddButton = (): JSX.Element => {
  const { setActiveId, setIsMovieModalOpen } = useGlobalContext();

  function handleClick() {
    setActiveId(undefined);
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
