import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <nav class="sidebar">
      <a class="logo" routerLink="/">{{title}}</a>
      <ul>
        <li *ngFor="let tab of tabs" routerLink="/{{tab.addr}}" [class.selected]="cur === tab.id" (click)="act(tab.id)">
          {{tab.name}}
        </li>
      </ul>
    </nav>
    <div class="topbar">
      <button type="button" class="btn btn-secondary">Sign out</button>
    </div>
    <div class="wrapper">
      <div class="route">
        <template ngbModalContainer></template>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent  {
  title = 'XX汽修连锁';
  tabs = [
    { id: 0, name: '库存管理', addr: 'goods' },
    { id: 1, name: '销售管理', addr: 'sales' },
    { id: 2, name: '客户管理', addr: 'custom' },
    { id: 3, name: '会员管理', addr: 'members' },
    { id: 4, name: '财务管理', addr: 'work' }
  ];
  cur:number;

  act(n:number):void {
    this.cur = n;
  }

}
