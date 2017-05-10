import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreQueryComponent }       from './storeQuery/storeQuery.component';
import { StoreDetailComponent }      from './storeQuery/storeDetail.component';
import { StoreModifyComponent }      from './storeQuery/storeModify.component';
import { StoreCreateComponent }      from './storeCreate/storeCreate.component';

const routes:Routes = [
  {
    path: '',
    children: [
      { path: 'storeQuery', component: StoreQueryComponent },
      { path: 'storeCreate', component: StoreCreateComponent },
      { path: 'storeDetail/:id', component: StoreDetailComponent },
      { path: 'storeModify/:id', component: StoreModifyComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class BeehiveRoutingModule {}