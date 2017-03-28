import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoodsComponent }       from './goods/goods.component';
import { WarehouseComponent }   from './warehouse/warehouse.component';

const routes:Routes = [
  {
    path: '',
    children: [
      { path: 'goods', component: GoodsComponent },
      { path: 'warehouse', component: WarehouseComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class StockRoutingModule {}