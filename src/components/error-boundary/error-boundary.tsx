import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import MoviePropType from '../../types/movie-type';

const propTypes = {
  children: PropTypes.node,
  movies: PropTypes.arrayOf(MoviePropType),
};

type ErrorBoundaryProps = PropTypes.InferProps<typeof propTypes>;

const ErrorBoundary: FunctionComponent<ErrorBoundaryProps> = ({
  children,
  movies,
}): JSX.Element => {
  const isEverythingOK: boolean | null | undefined =
    movies && movies.length > 0;

  return (
    <>
      {isEverythingOK ? (
        children
      ) : (
        <p className='page__error'>
          Oops, something went wrong... We are doing our best to fix the issue!
        </p>
      )}
    </>
  );
};

ErrorBoundary.propTypes = propTypes;

export default ErrorBoundary;
