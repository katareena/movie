export enum AppRoute {
  Root = '/',
  Signin = '/signin',
}

export const MovieGenres = [
  'All',
  'Documentary',
  'Comedies',
  'Horror',
  'Crime',
];

export const SortItems = ['Release Date', 'Rating', 'Runtime'];

export const defaultFormValue = {
  id: '',
  name: '',
  rating: '',
  runTime: '',
  genre: '',
  released: '',
  posterImage: '',
};
