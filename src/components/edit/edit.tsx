import React, { useState } from 'react';
import './edit.scss';
import { useGlobalContext } from '../../hooks/context';
import cn from 'classnames';
import MoreSvgComponent from '../../assets/images/three-dots-icon.svg';

const Edit = (): JSX.Element => {
  const [isOpenedEdit, setIsOpenedEdit] = useState(false);
  const { setIsEdit, setIsDelete, setIsNotifyModalOpen, setIsMovieModalOpen } =
    useGlobalContext();

  function handleEditClick() {
    setIsEdit(true);
    setIsMovieModalOpen(true);
  }

  function handleDeleteClick() {
    setIsDelete(true);
    setIsNotifyModalOpen(true);
  }

  return (
    <div className='edit'>
      <button className='edit__button' onClick={() => setIsOpenedEdit(true)}>
        <MoreSvgComponent />
      </button>

      <div className={cn('dropdown', { 'dropdown--opened': isOpenedEdit })}>
        <ul className='dropdown__options'>
          <li className='dropdown__option'>
            <button type='button' onClick={handleEditClick}>
              Edit
            </button>
          </li>
          <li className='dropdown__option'>
            <button type='button' onClick={handleDeleteClick}>
              Delete
            </button>
          </li>
        </ul>
        <button
          className='close'
          type='button'
          onClick={() => setIsOpenedEdit(false)}
        ></button>
      </div>
    </div>
  );
};

export default Edit;
