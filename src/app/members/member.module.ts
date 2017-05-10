import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { MemberService }        from './member.service';

import { MemberRoutingModule }  from './member.routes';

import { MemberQueryComponent }       from './memberQuery/memberQuery.component';
import { MemberDetailComponent }      from './memberQuery/memberDetail.component';
import { MemberModifyComponent }      from './memberQuery/memberModify.component';
import { MemberCreateComponent }      from './memberCreate/memberCreate.component';

@NgModule({
  imports:         [ CommonModule, FormsModule, MemberRoutingModule ],
  declarations:    [MemberQueryComponent,MemberDetailComponent,MemberModifyComponent,MemberCreateComponent],
  entryComponents: [],
  providers:       [MemberService]
})
export class MemberModule { }