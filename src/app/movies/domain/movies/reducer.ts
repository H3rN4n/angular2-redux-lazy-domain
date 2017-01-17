import { Actions, MoviesState, State } from 'ngrx-domains';

// we have a redundant "query" property that also exists on the "search" state.
// we can omit it by setting the query to accept the root state
// or by setting an observable...

export function reducer(state: MoviesState = State.movies, action: any): MoviesState {
  switch (action.constructor) {
    case Actions.movies.GetMovieListAction:
      return Object.assign({}, State.movies);
    case Actions.movies.SetMovieListAction:
      return Object.assign({}, state, { movies: action.payload });
    case Actions.movies.AddMovieAction:
      return Object.assign({}, State.movies);
    case Actions.movies.RemoveMovieAction:
      return Object.assign({}, State.movies);
    default:
      return state;
  }
}
