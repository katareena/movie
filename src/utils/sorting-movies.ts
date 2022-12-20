import { MovieType } from '../types/movie-type';

export function sortingMovies(activeSortingValue: string) {
  switch (activeSortingValue) {
    case 'Release Date':
      return (prev: MovieType, next: MovieType) =>
        next.released - prev.released;
    case 'Rating':
      return (prev: MovieType, next: MovieType) => next.rating - prev.rating;
    case 'Runtime':
      return (prev: MovieType, next: MovieType) => next.runTime - prev.runTime;
    default:
      break;
  }
}
