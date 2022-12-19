import React from 'react';
import './find-button.scss';
import FindSvgComponent from '../../assets/images/loupe-icon.svg';

const FindButton = (): JSX.Element => {
  return (
    <div className='find visually-hidden'>
      <button
        className='find__button'
        type='button'
        aria-label='open the search form'
      >
        <span>
          <FindSvgComponent />
        </span>
      </button>
    </div>
  );
};

export default FindButton;
