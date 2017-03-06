import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { NgbModule }            from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './stock/data.service';

import { AppRoutingModule }     from './routing.module';
import { StockModule }          from './stock/stock.module';

import { AppComponent }         from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    StockModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
