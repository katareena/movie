import React from 'react';
import './sorting.scss';
import ArrowSvgComponent from '../../assets/images/arrow-dropdown-icon.svg';

export default function Sorting(): JSX.Element {
  return (
    <div className='sorting'>
      <form className='sorting__form' action='#' method='get'>
        <span className='sorting__form-caption'>Sort by</span>

        <button className='sorting__form-type' type='button'>
          Popular
          <span className='sorting__form-arrow'>
            <ArrowSvgComponent />
          </span>
        </button>

        <ul className='visually-hidden sorting__options sorting__options--custom sorting__options--opened'>
          <li className='sorting__option sorting__option--active'>
            Top rated first
          </li>
          <li className='sorting__option'>release date</li>
          <li className='sorting__option'>durations</li>
        </ul>
      </form>
    </div>
  );
}
