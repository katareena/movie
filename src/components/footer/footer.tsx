import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './footer.scss';
import Logo from '../logo/logo';
import { AppRoute } from '../../constants/constants';
import cn from 'classnames';

const Footer = (): JSX.Element => {
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === AppRoute.Root && window.scrollTo(0, 0);
  });

  return (
    <footer
      className={cn('footer', {
        'footer--sigin': pathname === AppRoute.Signin,
      })}
    >
      <div className='footer__wrap'>
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;
