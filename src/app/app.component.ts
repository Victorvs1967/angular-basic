import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  servers = [
    {
      name: 'Production Server',
      status: 'stable',
      instanceType: 'medium',
      started: new Date(2021, 9, 10)
    },
    {
      name: 'Development Server',
      status: 'offline',
      instanceType: 'small',
      started: new Date(2021, 9, 10)
    },
    {
      name: 'User Database',
      status: 'stable',
      instanceType: 'large',
      started: new Date(2021, 9, 10)
    },
    {
      name: 'Testing Environment Server',
      status: 'stable',
      instanceType: 'small',
      started: new Date(2021, 9, 10)
    },
  ];

  filteredStatus = '';

  constructor() {
  }

  ngOnInit() {
  }

  getStatusClasses = (server: { instanceType: string, name: string, status: string, started: Date }) => {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  };

}
