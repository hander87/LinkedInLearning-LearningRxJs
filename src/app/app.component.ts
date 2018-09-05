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

    // First Observable creation
    this.observable$ = Observable.create((observer) => {
      // Observables contains three methods:
      // Next,
      // Error,
      // Complete
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete(3);
    });

    // Subscribing to it. (This creates NEW instance.)
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
