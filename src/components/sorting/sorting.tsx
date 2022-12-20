import React, { useState, FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './sorting.scss';
import cn from 'classnames';
import ArrowSvgComponent from '../../assets/images/arrow-dropdown-icon.svg';
import { SortItems } from '../../constants/constants';

const propTypes = {
  activeSortingValue: PropTypes.string.isRequired,
  changeSortingValue: PropTypes.func.isRequired,
};

type SortingProps = PropTypes.InferProps<typeof propTypes>;

const Sorting: FunctionComponent<SortingProps> = ({
  activeSortingValue,
  changeSortingValue,
}): JSX.Element => {
  const [isOpenedSorting, setIsOpenedSorting] = useState(false);

  function handleSetActiveSortingValue(item: string) {
    changeSortingValue(item);
    setIsOpenedSorting(false);
  }

  return (
    <div className='sorting'>
      <form className='sorting__form' action='#' method='get'>
        <span className='sorting__form-caption'>Sort by</span>

        <button
          className='sorting__form-type'
          type='button'
          onClick={() => setIsOpenedSorting(!isOpenedSorting)}
        >
          {activeSortingValue}
          <span
            className={cn('sorting__form-arrow', {
              'sorting__form-arrow--opened': isOpenedSorting,
            })}
          >
            <ArrowSvgComponent />
          </span>
        </button>

        <div
          className={cn('dropdown', { 'dropdown--opened': isOpenedSorting })}
        >
          <ul className='dropdown__options'>
            {SortItems.map((item: string) => (
              <li
                className={cn('dropdown__option', {
                  'dropdown__option--active': item === activeSortingValue,
                })}
                key={item}
              >
                <Link to='#' onClick={() => handleSetActiveSortingValue(item)}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Sorting;
