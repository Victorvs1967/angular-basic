import { Component, Input, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  @Input() account: { name: string, status: string } | undefined;
  @Input() id: number = 0;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onSetTo = (status: string) => {
    this.accountService.updateStatus(this.id, status);
    this.accountService.statusUpdated.emit(status);
  }

}
