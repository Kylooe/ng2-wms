import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoodsComponent }       from './goods/goods.component';
import { WarehousingComponent } from './warehousing/warehousing.component';
import { RecordsComponent }     from './records/records.component';
import { RecordComponent }      from './records/record.component';

const routes:Routes = [
  {
    path: '',
    children: [
      { path: 'goods', component: GoodsComponent },
      { path: 'warehouse', component: WarehousingComponent },
      { path: 'records', component: RecordsComponent },
      { path: 'records/:id', component: RecordComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class StockRoutingModule {}