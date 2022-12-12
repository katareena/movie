import React from 'react';
import './catalog.scss';
import Genres from '../genres/genres';
import Sorting from '../sorting/sorting';
import CatalogItem from '../catalog-item/catalog-item';

export default function Catalog(): JSX.Element {
  return (
    <section className='catalog'>
      <h2 className='visually-hidden'>Catalog</h2>

      <div className='catalog__nav'>
        <Genres />
        <Sorting />
      </div>

      <p className='catalog__result-text'>
        <span>39</span> movies found
      </p>

      <div className='catalog__list'>
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
      </div>
    </section>
  );
}
