import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  observable$;

  constructor() {}

  ngOnInit() {

    this.observable$ = Observable.create((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete(3);
    });

    this.observable$.subscribe(
      value => console.log(value),
      err => {},
      () => console.log('This is the end.')
    );

  }

  ngOnDestroy() {
    this.observable$.unsubscribe();
  }

}
