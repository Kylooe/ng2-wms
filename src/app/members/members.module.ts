import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

import { SharedModule }         from '../shared/shared.module';

import { MemberService }        from './members.service';

import { MembersComponent }     from './members.component';
import { DetailComponent }      from './detail.component';

const routes:Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: MembersComponent }
    ]
  }
];

@NgModule({
  imports:         [ SharedModule, RouterModule.forChild(routes) ],
  declarations:    [ MembersComponent, DetailComponent ],
  entryComponents: [ DetailComponent ],
  providers:       [ MemberService ]
})
export class MemberModule { }