import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable } from 'rxjs';
import {
  debounceTime,
  map,
  switchMap,
  distinctUntilChanged,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'RxJs Course App - Reddit Search';
  searchString;
  results$: Observable<any>;
  searchSubject$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.results$ = this.searchSubject$
      .pipe(
        debounceTime(200),
        // Skips value if it is the same as previous value
        distinctUntilChanged(),
        // Previously "do" - Does NOTHING! Good for console logs.
        tap(x => console.log('Logs output: ' + x)),
        switchMap(searchString => this.queryAPI(searchString))
      );
  }

  queryAPI(searchString) {
    console.log('queryAPI: ', searchString);
    return this.http.get(`https://www.reddit.com/r/aww/search.json?q=${searchString}`)
    .pipe(
      map(result => result['data']['children'])
    );
  }

  inputChanged($event) {
    console.log('Input changed: ' + $event);
    this.searchSubject$.next($event);
  }

  ngOnDestroy() {

  }

}
