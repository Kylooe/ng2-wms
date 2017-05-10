import { Component } from '@angular/core';
import { Router }      from '@angular/router';

import { AuthService } from '../admin/auth.service';

@Component({
  moduleId: module.id,
  selector: 'workspace',
  template: `
    <nav class="sidebar">
      <a class="logo" routerLink="/admin">{{title}}</a>
      <sidebar></sidebar>
    </nav>
    <div class="topbar">
      <img src="../../assets/avatar.jpg">
      <span>你好，admin | </span>
      <a (click)="logout()">退出</a>
    </div>
    <div class="wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['workspace.component.css']
})

export class WorkspaceComponent  {
  title = 'XX汽修连锁';
  constructor(public authService:AuthService, public router:Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
