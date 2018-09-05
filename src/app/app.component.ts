import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable,  ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  mySubject$;

  constructor() {}

  ngOnInit() {

    // ReplaySubject gives Subscribers all previous and after values
    this.mySubject$ = new ReplaySubject();
    this.mySubject$.subscribe( x => console.log('First Subscribe: ', x) );
    this.mySubject$.next(1);
    this.mySubject$.next(2);
    // this.mySubject$.unsubscribe();

    this.mySubject$.subscribe( x => console.log('Second Subscribe: ', x) );
    this.mySubject$.next(3);
  }

  ngOnDestroy() {
    this.mySubject$.unsubscribe();
  }

}
