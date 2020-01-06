import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarningMessageComponent } from './messages/warning-message/warning-message.component';
import { SuccessMessageComponent } from './messages/success-message/success-message.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningMessageComponent,
    SuccessMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
