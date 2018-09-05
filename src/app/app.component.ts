import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
// debounceTime adds a "lag" so only a request gets sent after 200 milliseconds
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'RxJs Course App';
  searchString;
  searchSubject$ = new Subject<string>();

  constructor() {}

  ngOnInit() {
    this.searchSubject$
      .pipe(
        debounceTime(200)
      )
      .subscribe( x => console.log( 'Debounced: ', x ) );
  }

  inputChanged($event) {
    console.log('Input changed: ' + $event);
    this.searchSubject$.next($event);
  }

  ngOnDestroy() {

  }

}
