import 'rxjs/add/operator/first';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { Store } from '@ngrx/store';
import { State, Actions } from 'ngrx-domains';

import { MoviesPageComponent } from './components/stats-page/stats-page.component';
import { routes } from './routes';
import './domain/movies';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoviesPageComponent]
})

export class MoviesModule {
  constructor(store: Store<State>) {
    // we relay on an external domain's action so we must first init the stats.
    // if not our root query will return null.
    // the root query runs before the reducer so it does not have a default state.
    let movies = [
      {name: 'movie1', description: 'desc1'},
      {name: 'movie2', description: 'desc2'}
    ];

    console.log(store);
    store
      .first()
      .filter(state => !state.movies)
      .subscribe(state => store.dispatch(new Actions.movies.SetMovieListAction(movies)));
  }
}
