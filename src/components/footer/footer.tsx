import React from 'react';
import './footer.scss';
import Logo from '../logo/logo';

export default function Footer(): JSX.Element {
  return (
    <footer className='footer'>
      <div className='footer__wrap'>
        <Logo />
      </div>
    </footer>
  );
}
