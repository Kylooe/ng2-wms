import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './mock-data/data.service';

import { AppRoutingModule }     from './routing.module';

import { AppComponent }         from './app.component';
import { SidebarComponent }     from './sidebar/sidebar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [ AppComponent, SidebarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
