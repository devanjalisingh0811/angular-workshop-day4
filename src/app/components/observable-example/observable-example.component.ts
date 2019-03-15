import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, interval } from 'rxjs';
import {filter, map} from 'rxjs/operators'

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.scss']
})
export class ObservableExampleComponent implements OnInit, OnDestroy {

  constructor() { }

  myObservable:any;
  intervalObservable:any;
  usingPipeObservable:any;
  subscription:any;

  ngOnInit() {
    //publisher
    this.myObservable = of(1, 2, 3, 4);

    this.intervalObservable = interval(1000);

    this.usingPipeObservable = of(1, 2, 3, 4, 5, 6, 7, 8).pipe(
      filter(n => n%2 != 0),
      map(n => n*n )
    );
    
    // Create observer object
    const observer = {
      next : x => console.log("Data :"+x),
      error: err =>console.log("Observer has got an error"+err) ,
      complete: () => console.log("Completed"),
    };

    //subscriber
    this.myObservable.subscribe(observer);

    this.subscription = this.intervalObservable.subscribe(x => console.log(x));

    this.usingPipeObservable.subscribe(x => console.log("Filtering data using pipes: "+x));

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  unsubscribe(){
    this.subscription.unsubscribe();
  }
}
