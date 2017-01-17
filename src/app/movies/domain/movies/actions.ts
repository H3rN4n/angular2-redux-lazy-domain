import { Action } from '@ngrx/store';
import { Actions } from 'ngrx-domains';


/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
  ADD_MOVIE: '[Movies] Add a Movie',
  DELETE_MOVIE: '[Movies] Delete a Movie',
  SET_MOVIE_LIST: '[Movies] Set all Movies',
  GET_MOVIE_LIST: '[Movies] Get all Movies from the store',
};


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

export class AddMovieAction implements Action {
  type = ActionTypes.ADD_MOVIE;

  constructor() { }
}

export class RemoveMovieAction implements Action {
  type = ActionTypes.DELETE_MOVIE;

  constructor() { }
}

export class SetMovieListAction implements Action {
  type = ActionTypes.SET_MOVIE_LIST;

  constructor(public payload: any[]) {
    
  }
}

export class GetMovieListAction implements Action {
  type = ActionTypes.GET_MOVIE_LIST;

  constructor() { }
}

Actions.movies = {
  TYPES: ActionTypes,
  AddMovieAction,
  RemoveMovieAction,
  SetMovieListAction,
  GetMovieListAction
};

declare module 'ngrx-domains' {
  interface Actions {
    movies: {
      TYPES: typeof ActionTypes,
      AddMovieAction: typeof AddMovieAction;
      RemoveMovieAction: typeof RemoveMovieAction;
      SetMovieListAction: typeof SetMovieListAction;
      GetMovieListAction: typeof GetMovieListAction;
    };
  }
}
