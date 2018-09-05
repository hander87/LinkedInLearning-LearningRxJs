import { Component, OnInit, OnDestroy } from '@angular/core';

// (RxJs v6 import method for "of" and "mergeMap")
import { Observable, interval, of } from 'rxjs';
import { take, map, filter, mergeMap } from 'rxjs/operators';

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

    // mergeMap combines data streams, and access values

    letters$.pipe(mergeMap( x =>
      numbers$.pipe(
        take(5),
        map(i => i + x)
      ))
    ).subscribe( x => console.log(x) );

  }

  ngOnDestroy() {

  }

}
