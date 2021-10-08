import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [
    {
      id: 1,
      name: 'Victor'
    },
    {
      id: 2,
      name: 'Nata'
    },
    {
      id: 3,
      name: 'Pete'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
