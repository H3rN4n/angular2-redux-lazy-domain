import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, Queries } from 'ngrx-domains';

@Component({
  selector: 'app-movies-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.css']
})
export class MoviesPageComponent {

  movies$: Observable<any[]>;

  constructor(store: Store<State>) {
    this.movies$ = store.select(Queries.movies.movies);
  }

}
