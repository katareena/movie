import React from 'react';
import './edit.scss';
import MoreSvgComponent from '../../assets/images/three-dots-icon.svg';

export default function Edit(): JSX.Element {
  return (
    <div className='edit'>
      <button className='edit__button'>
        <MoreSvgComponent />
      </button>

      {/* <!-- dropdown--opened --> */}
      <div className='dropdown'>
        <ul className='dropdown__options'>
          <li className='dropdown__option'>Edit</li>
          <li className='dropdown__option'>Delete</li>
        </ul>
        <button className='close'></button>
      </div>
    </div>
  );
}
