import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { AccountComponent } from './components/account/account.component';
import { LoggingService } from './services/logging.service';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [LoggingService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
