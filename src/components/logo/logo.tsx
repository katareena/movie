import React from 'react';
import './logo.scss';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';
import logoSvg from '../../assets/images/logo.svg?url';

const Logo = (): JSX.Element => {
  return (
    <div className='logo'>
      <Link to={AppRoute.Root}>
        <img src={logoSvg} width='151' height='24' alt='logo' />
      </Link>
    </div>
  );
};

export default Logo;
