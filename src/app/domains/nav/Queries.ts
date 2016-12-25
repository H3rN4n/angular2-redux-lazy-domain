import { State, NavSchema, Query, Queries, Root, setQueries } from 'ngrx-domains';

/*
 The root query is auto-generated, unless specified.
 There's no need to set it unless there is some wierd state structure.
 */
//Root.nav = (state: State) => state.nav;

export interface NavQueries {
  showSidenav: Query<NavSchema, boolean>;
  sidenavSize: Query<NavSchema, number>;
}


setQueries('nav', {
  showSidenav: (state: NavSchema) => state.toggleState,
  sidenavSize: <any>false
});


declare module 'ngrx-domains' {
  interface Root {
    nav: Query<State, NavSchema>;
  }

  interface Queries {
    nav: NavQueries;
  }
}
