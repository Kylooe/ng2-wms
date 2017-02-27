import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <nav>
      <h1 routerLink="/">{{title}}</h1>
      <ul>
        <li *ngFor="let tab of tabs" [class.unfold]="cur === tab.id">
          <p (click)="unfold(tab.id)">{{tab.name}}</p>
          <div class="tab-body" [hidden]="cur !== tab.id">
            <a *ngFor="let item of tab.funcs" routerLink="/{{item.addr}}">{{item.func}}</a>
          </div>
        </li>
      </ul>
    </nav>
    <header>
      
    </header>
    <div class="route">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent  {
  title = 'XX汽修连锁';
  tabs = [
    {
      id: 0,
      name: '库存管理',
      funcs: [
        { func: '库存一览', addr: 'goods' },
        { func: '采购入库', addr: 'purchase' },
        { func: 'xxxxx', addr: 'b' },
      ]
    },
    {
      id: 1,
      name: '销售管理',
      funcs: [
        { func: '入库', addr: 'c' },
        { func: 'xxxxx', addr: 'd' },
        { func: 'xxxxx', addr: 'e' },
      ]
    },
    {
      id: 2,
      name: '客户管理',
      funcs: [
        { func: '查询', addr: 'f' }
      ]
    },
    {
      id: 3,
      name: '会员管理',
      funcs: [
        { func: '新增会员', addr: 'store' },
        { func: 'xxxxx', addr: 'xxx' },
        { func: 'xxxxx', addr: 'xxx' },
      ]
    },
    {
      id: 4,
      name: '财务管理',
      funcs: [
        { func: '统计', addr: 'store' },
        { func: 'xxxxx', addr: 'xxx' }
      ]
    }
  ];
  cur:number;

  unfold(n:number):void {
    this.cur = n;
  }

}
