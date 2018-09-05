import { Component, OnInit, OnDestroy } from '@angular/core';

// (RxJs v6 import method for "filter")
import { Observable, interval } from 'rxjs';
// Filter filters out certain values we dont want in outout
import { take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  constructor() {}

  ngOnInit() {

    const numbers$ = interval(1000);

    numbers$
      .pipe(
        take(5),
        map( x => x * 10 ),
        filter( x => x > 20 )
      )
      .subscribe(x => console.log(x));

  }

  ngOnDestroy() {

  }

}
