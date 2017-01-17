import { State } from 'ngrx-domains';

State.movies = {
  movies: [],
};

declare module 'ngrx-domains' {
  export interface MoviesState {
    //@todo: add movie model
    movies: any[];
  }

  interface State {
    movies: MoviesState;
  }
}
