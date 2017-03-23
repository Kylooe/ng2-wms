import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <nav class="sidebar">
      <a class="logo" routerLink="/">{{title}}</a>
      <collapse></collapse>
    </nav>
    <div class="topbar">
      <button>Sign out</button>
    </div>
    <div class="wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent  {
  title = 'XX汽修连锁';
  

}
