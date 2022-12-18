import React from 'react';
import { MovieType } from '../../types/movie-type';

type ErrorBoundaryProps = {
  children: JSX.Element;
  movies: MovieType[];
};

export default function ErrorBoundary({
  children,
  movies,
}: ErrorBoundaryProps): JSX.Element {
  const isEverythingOK: boolean = movies.length > 0;

  return isEverythingOK ? (
    children
  ) : (
    <p className='page__error'>
      Oops, something went wrong... We are doing our best to fix the issue!
    </p>
  );
}
