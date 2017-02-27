import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoodsComponent }       from './stock/goods.component';
import { PurchaseComponent }    from './stock/purchase.component';

const routes:Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'goods',  component: GoodsComponent },
  { path: 'purchase',  component: PurchaseComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
