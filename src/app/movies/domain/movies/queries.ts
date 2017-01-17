import { MoviesState, Query, Queries, Root, combineRootFactory } from 'ngrx-domains';

export interface MoviesQueries {
  //@todo: add movie module
  movies: Query<any[]>;
}

/* SEE domains/boks/queries.ts for a detailed explanation */
const fromRoot = combineRootFactory<MoviesState>('movies');

Queries.movies = {
  movies: fromRoot( state => state.movies )
};

declare module 'ngrx-domains' {
  interface Root {
    movies: Query<MoviesState>;
  }

  interface Queries {
    movies: MoviesQueries;
  }
}
