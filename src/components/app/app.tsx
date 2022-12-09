import React from 'react';
import './app.scss';
import image from '../../assets/images/bg-header.jpg';
import logo from '../../assets/images/calendar-icon.svg?url';
import ReactLogoComponent from '../../assets/images/calendar-icon.svg';

function App() {
  return (
    <>
      <h1>react typescript template</h1>
      <img src={image} width='300' height='200' />
      <img src={logo} width='100' />
      <ReactLogoComponent width={'50'} height={'50'} />
    </>
  );
}

export default App;
