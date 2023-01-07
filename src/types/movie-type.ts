import PropTypes from 'prop-types';

export const MoviePropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
}).isRequired;

export type MovieType = {
  id: number;
  name: string;
  posterImage: string;
  rating: number;
  runTime: number;
  genre: string;
  released: number;
};

// export type DefaultMovieType = {
//   id: string;
//   name: string;
//   posterImage: string;
//   rating: string;
//   runTime: string;
//   genre: string;
//   released: string;
// };

export const DefaultMoviePropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  runTime: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
}).isRequired;
