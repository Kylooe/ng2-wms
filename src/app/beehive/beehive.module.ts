import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { StoreService }        from './store.service';

import { BeehiveRoutingModule }  from './beehive.routes';

import { StoreQueryComponent }       from './storeQuery/storeQuery.component';
import { StoreDetailComponent }      from './storeQuery/storeDetail.component';
import { StoreModifyComponent }      from './storeQuery/storeModify.component';
import { StoreCreateComponent }      from './storeCreate/storeCreate.component';

@NgModule({
  imports:         [ CommonModule, FormsModule, BeehiveRoutingModule ],
  declarations:    [StoreQueryComponent,StoreDetailComponent,StoreModifyComponent,StoreCreateComponent],
  entryComponents: [],
  providers:       [StoreService]
})
export class BeehiveModule { }