import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // numbers = [1, 2, 3, 4, 5];
  odds = [1, 3, 5];
  evens = [2, 4, 6];
  onlyOdd = false;
  item = 100;

}
