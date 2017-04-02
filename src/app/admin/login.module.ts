import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }            from './auth-guard.service';
import { AuthService }          from './auth.service';

import { LoginComponent }       from './login.component';

const route:Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports:   [ RouterModule.forChild(route) ],
  exports:   [ RouterModule ],
  providers: [ AuthGuard, AuthService ]
})

export class LoginRoutingModule {}
