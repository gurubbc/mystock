import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';

import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
