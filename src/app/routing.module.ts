import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AuthGuard }            from './auth/auth-guard.service';

const routes:Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' /*canActivate: [AuthGuard]*/ },
  { path: 'stock', loadChildren:'./stock/stock.module#StockModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
