import React from 'react';
import './header.scss';
import Logo from '../logo/logo';
import AddButton from '../add-button/add-button';
import FindButton from '../find-button/find-button';

export default function Header(): JSX.Element {
  return (
    <header className='header'>
      <div className='header__wrap'>
        <h1 className='visually-hidden'>Movie</h1>
        <Logo />
        <AddButton />
        <FindButton />
      </div>
    </header>
  );
}
