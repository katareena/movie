import React from 'react';
import './sorting.scss';
import ArrowSvgComponent from '../../assets/images/arrow-dropdown-icon.svg';
import { SortItems } from '../../constants/constants';

const Sorting = (): JSX.Element => {
  return (
    <div className='sorting'>
      <form className='sorting__form' action='#' method='get'>
        <span className='sorting__form-caption'>Sort by</span>

        <button className='sorting__form-type' type='button'>
          release date
          <span className='sorting__form-arrow'>
            <ArrowSvgComponent />
          </span>
        </button>

        <div className='dropdown dropdown--opened'>
          <ul className='dropdown__options'>
            {SortItems.map((item: string) => (
              <li className='dropdown__option' key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Sorting;
