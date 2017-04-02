import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'workspace',
  template: `
    <nav class="sidebar">
      <a class="logo" routerLink="/admin">{{title}}</a>
      <sidebar></sidebar>
    </nav>
    <div class="topbar">
      <button>Sign out</button>
    </div>
    <div class="wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['workspace.component.css']
})

export class WorkspaceComponent  {
  title = 'XX汽修连锁';
}
