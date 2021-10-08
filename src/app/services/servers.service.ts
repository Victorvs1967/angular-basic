import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  private servers = [
    {
      id: 1,
      name: 'Productionservers',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    },
  ];

  constructor() { }

  getServers = () => this.servers;
  getServer = (id: number) => this.servers.find(s => s.id === id);
  updateServer = (id: number, serverInfo: {name: string, status: string}) => {
    const server = this.servers.find(s => s.id === id);
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }

}