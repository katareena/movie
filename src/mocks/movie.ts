import { MovieType } from '../types/movie-type';
import poster1 from '../assets/images/poster-1.jpg';
import poster2 from '../assets/images/poster-2.jpg';
import poster3 from '../assets/images/poster-3.jpg';
import poster4 from '../assets/images/poster-4.jpg';
import poster5 from '../assets/images/poster-5.jpg';
import poster6 from '../assets/images/poster-6.jpg';

export const movies: MovieType[] = [
  {
    id: 1,
    name: 'Pulp Fiction',
    posterImage: poster1,
    rating: 8.9,
    runTime: 158,
    genre: 'Action & Adventure',
    released: 2004,
  },
  {
    id: 2,
    name: 'Bohemian Rhapsody',
    posterImage: poster2,
    rating: 7.5,
    runTime: 99,
    genre: 'Drama, Biography, Music',
    released: 2003,
  },
  {
    id: 3,
    name: 'Kill Bill: Vol 2',
    posterImage: poster3,
    rating: 8.7,
    runTime: 120,
    genre: 'Oscar winning Movie',
    released: 1994,
  },
  {
    id: 4,
    name: 'Avengers: War of Infinity',
    posterImage: poster4,
    rating: 4.4,
    runTime: 69,
    genre: 'Action & Adventure',
    released: 2004,
  },
  {
    id: 5,
    name: 'Inception',
    posterImage: poster5,
    rating: 9.9,
    runTime: 79,
    genre: 'Action & Adventure',
    released: 2003,
  },
  {
    id: 6,
    name: 'Reservoir dogs',
    posterImage: poster6,
    rating: 6.2,
    runTime: 89,
    genre: 'Oscar winning Movie',
    released: 1994,
  },
];
