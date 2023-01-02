import React from 'react';
import ReactDOM from 'react-dom/client';
import './global-styles/base.scss';
import App from './components/app/app';
import { movies } from './mocks/movie';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App movies={movies} />
  </React.StrictMode>
);
