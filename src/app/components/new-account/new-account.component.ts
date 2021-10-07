import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private accountService: AccountService) { 
    this.accountService.statusUpdated.subscribe((status: string) => alert(`New status: ${status}`));
  }

  ngOnInit(): void {
  }

  onCreateAccount = (accountName: string, accountStatus: string) => {    
    this.accountService.addAccount(accountName, accountStatus);
  }


}
