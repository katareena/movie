import React, { useState } from 'react';
import './edit.scss';
import cn from 'classnames';
import MoreSvgComponent from '../../assets/images/three-dots-icon.svg';

const Edit = (): JSX.Element => {
  const [isOpenedEdit, setIsOpenedEdit] = useState(false);

  return (
    <div className='edit'>
      <button className='edit__button' onClick={() => setIsOpenedEdit(true)}>
        <MoreSvgComponent />
      </button>

      <div className={cn('dropdown', { 'dropdown--opened': isOpenedEdit })}>
        <ul className='dropdown__options'>
          <li className='dropdown__option'>Edit</li>
          <li className='dropdown__option'>Delete</li>
        </ul>
        <button
          className='close'
          onClick={() => setIsOpenedEdit(false)}
        ></button>
      </div>
    </div>
  );
};

export default Edit;
