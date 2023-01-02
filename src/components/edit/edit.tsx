import React from 'react';
import './edit.scss';
import MoreSvgComponent from '../../assets/images/three-dots-icon.svg';

const Edit = (): JSX.Element => {
  return (
    <div className='edit'>
      <button className='edit__button'>
        <MoreSvgComponent />
      </button>

      <div className='dropdown'>
        <ul className='dropdown__options'>
          <li className='dropdown__option'>Edit</li>
          <li className='dropdown__option'>Delete</li>
        </ul>
        <button className='close'></button>
      </div>
    </div>
  );
};

export default Edit;
