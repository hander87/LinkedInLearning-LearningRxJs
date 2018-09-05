import { Component, OnInit, OnDestroy } from '@angular/core';

// fromEvent takes element from the DOM
import { fromEvent, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'RxJs Course App';

  constructor() {}

  ngOnInit() {
    // Creates Observable from a CLICK event
    fromEvent(document, 'click').subscribe(x => console.log(x));
  }

  ngOnDestroy() {

  }

}
