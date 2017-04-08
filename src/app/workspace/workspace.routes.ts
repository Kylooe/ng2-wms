import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }            from '../admin/auth-guard.service';
import { WorkspaceComponent }   from './workspace.component';
import { DashboardComponent }   from '../dashboard/dashboard.component';

export const workspaceRoutes:Routes = [
  { 
    path: '',
    component: WorkspaceComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: '', component: DashboardComponent },
          { path: 'stock', loadChildren:'app/stock/stock.module#StockModule' },
          { path: 'beehive', loadChildren:'app/beehive/beehive.module#BeehiveModule' },
          { path: 'members', loadChildren:'app/members/member.module#MemberModule' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(workspaceRoutes) ],
  exports: [ RouterModule ]
})

export class WorkspaceRoutingModule {}