import { Component, OnInit, OnDestroy } from '@angular/core';

// interval adds +1 each second/whatever value you give
// (RxJs v6 import method for "interval" and "take")
import { Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  constructor() {}

  ngOnInit() {

    const numbers$ = interval(1000).pipe(take(5));

    numbers$.subscribe(x => console.log(x));

  }

  ngOnDestroy() {

  }

}
