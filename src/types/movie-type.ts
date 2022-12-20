import PropTypes from 'prop-types';

export default PropTypes.shape({
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
