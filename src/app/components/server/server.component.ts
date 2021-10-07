import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  serverId: number = 21;
  serverStatus: 'offline' | 'online';

  constructor() { 
    this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
    this.serverId = Math.floor(Math.random() * 100) + 1;
  }

  ngOnInit(): void {
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'; 
  }

  getStatus(): string {
    return this.serverStatus;
  }

}
