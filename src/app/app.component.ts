import { Component, OnInit, OnDestroy } from '@angular/core';

// (RxJs v6 import method for "map")
import { Observable, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

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
        map( x => x * 10 )
      )
      .subscribe(x => console.log(x));

  }

  ngOnDestroy() {

  }

}
