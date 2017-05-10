import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberQueryComponent }      from './memberQuery/memberQuery.component';
import { MemberDetailComponent }      from './memberQuery/memberDetail.component';
import { MemberModifyComponent }      from './memberQuery/memberModify.component';
import { MemberCreateComponent }      from './memberCreate/memberCreate.component';

const routes:Routes = [
  {
    path: '',
    children: [
      { path: 'memberQuery', component: MemberQueryComponent },
      { path: 'memberDetail/:id', component: MemberDetailComponent },
      { path: 'memberModify/:id', component: MemberModifyComponent },
      { path: 'memberCreate', component: MemberCreateComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class MemberRoutingModule {}