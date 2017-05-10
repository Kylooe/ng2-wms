import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';

import { FormsModule }          from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './mock-data/data.service';

import { AppRoutingModule }     from './routing.module';
import { LoginRoutingModule }   from './admin/login.module';

import { AppComponent }         from './app.component';
import { LoginComponent }       from './admin/login.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    LoginRoutingModule
  ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
