import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './stock/data.service';

import { AppRoutingModule }     from './routing.module';
import { StockModule }          from './stock/stock.module';

import { AppComponent }         from './app.component';
import { CollapseComponent }    from './collapse.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    StockModule
  ],
  declarations: [ AppComponent, CollapseComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
