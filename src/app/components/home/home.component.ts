import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription | undefined;

  constructor() { }
  ngOnInit(): void {
    const customObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 4) {
          observer.error(new Error('count is greater then 4'));
        }
        count++;
      }, 1000);
    });
    this.firstObsSubscription = customObservable
      .pipe(
        filter((data: number) => data > 0), 
        map((data: number) => `Round: ${data++}`))
      .subscribe(
        (data: any) => console.log(data), 
        (error: any) => console.log(error),
        () => console.log('Completed'));
  }

  ngOnDestroy(): void {
    this.firstObsSubscription?.unsubscribe();
  }

}
