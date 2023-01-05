import React from 'react';
import './notify-modal.scss';
import cn from 'classnames';
import { useGlobalContext } from '../../hooks/context';

const NotifyModal = (): JSX.Element => {
  const {
    isDelete,
    setIsDelete,
    isEdit,
    setIsEdit,
    isNotifyModalOpen,
    setIsNotifyModalOpen,
  } = useGlobalContext();

  function handleClose() {
    setIsNotifyModalOpen(false);
    setIsEdit(false);
    setIsDelete(false);
  }

  return (
    <div className={cn('modal', { 'modal--show': isNotifyModalOpen })}>
      <div className='modal__wrap notify'>
        {isEdit && <div className='notify__icon'></div>}
        <h2 className='notify__title'>
          {isEdit && 'congratulations !'}
          {isDelete && 'Delete MOVIE'}
        </h2>
        <p className='notify__text'>
          {isEdit && 'The movie has been added to database successfully'}
          {isDelete && 'Are you sure you want to delete this movie?'}
        </p>

        {isDelete && (
          <button
            className='notify__button'
            type='button'
            aria-label='Close form'
            onClick={handleClose}
          >
            confirm
          </button>
        )}

        <button
          className='notify__close'
          type='button'
          aria-label='Close form'
          onClick={handleClose}
        ></button>
      </div>
    </div>
  );
};

export default NotifyModal;
