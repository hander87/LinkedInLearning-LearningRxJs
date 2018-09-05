import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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

    this.mySubject$ = new Subject();
    this.mySubject$.subscribe( x => console.log('First Subscribe', x) );
    this.mySubject$.next(1);
    this.mySubject$.next(2);
    this.mySubject$.unsubscribe();

    this.mySubject$.subscribe( x => console.log('Second Subscribe (new instance)', x) );
    this.mySubject$.next(3);
  }

  ngOnDestroy() {
    this.mySubject$.unsubscribe();
  }

}
