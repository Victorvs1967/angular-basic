import { Component, OnInit } from '@angular/core';
import { ServersService } from 'src/app/services/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  server: { id: number, name: string, status: string } | undefined;

  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
    this.server = this.serversService.getServer(1);
  }

}
