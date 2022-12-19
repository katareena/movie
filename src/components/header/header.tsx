import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Logo from '../logo/logo';
import AddButton from '../add-button/add-button';
import FindButton from '../find-button/find-button';
import { AppRoute } from '../../constants/constants';

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <div className='header__wrap'>
        <h1 className='visually-hidden'>Movie</h1>
        <Logo />
        <div style={{ display: 'flex' }}>
          <AddButton />
          <Link
            to={AppRoute.Signin}
            style={{ marginLeft: 15, display: 'flex', alignItems: 'center' }}
          >
            LOGIN
          </Link>
        </div>

        <FindButton />
      </div>
    </header>
  );
};

export default Header;
