import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter();
  @Output() bluePrintCreated = new EventEmitter();

  // newServerName: string = '';
  newServerContent: string = '';

  onAddServer = (nameInput: any) => this.serverCreated.emit({
    serverName: nameInput.value, // this.newServerName
    serverContent: this.newServerContent
  });

  onAddBlueprint = (nameInput: any) => this.bluePrintCreated.emit({
    serverName: nameInput.value, // this.newServerName
    serverContent: this.newServerContent
  });

  constructor() { }

  ngOnInit(): void {
  }

}
