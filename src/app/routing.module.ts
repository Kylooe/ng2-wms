import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }            from './admin/auth-guard.service';

import { LoginComponent }       from './admin/login.component';
import { WorkspaceComponent }   from './workspace/workspace.component';

const routes:Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', canLoad: [AuthGuard], loadChildren:'app/workspace/workspace.module#WorkspaceModule' },
  { path: '**', redirectTo: '/admin' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
