import React from 'react';
import './find-button.scss';
import { useGlobalContext } from '../../hooks/context';
import FindSvgComponent from '../../assets/images/loupe-icon.svg';

const FindButton = (): JSX.Element => {
  const { setIsCardOpen } = useGlobalContext();

  return (
    <div className='find'>
      <button
        className='find__button'
        type='button'
        aria-label='open the search form'
        onClick={() => setIsCardOpen(false)}
      >
        <FindSvgComponent />
      </button>
    </div>
  );
};

export default FindButton;
