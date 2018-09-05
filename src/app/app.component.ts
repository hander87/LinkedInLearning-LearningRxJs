import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, interval, of } from 'rxjs';
// (RxJs v6 import method for "switchMap")
import { take, map, filter, switchMap } from 'rxjs/operators';

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
    const letters$ = of('a', 'b', 'c', 'd', 'e');

    // switchMap Outputs only newest value, instead of ALL values
    letters$.pipe(switchMap( x =>
      numbers$.pipe(
        take(5),
        map(i => i + x)
      ))
    ).subscribe( x => console.log(x) );

  }

  ngOnDestroy() {

  }

}
