import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sidebar',
  template: `
    <ul class="main">
      <li *ngFor="let tab of tabs" [class.unfold]="cur === tab.id" (click)="unfold(tab.id)">
        <p><i class="fa {{tab.icon}}" aria-hidden="true"></i>{{tab.name}}</p>
        <ul class="sub" [@collapse]="cur === tab.id ? 'active' : 'void'">
          <li *ngFor="let item of tab.sub">
            <a  routerLink="/{{item.addr}}">{{item.name}}</a>
          </li>
        </ul>
      </li>
    </ul>
  `,
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('collapse', [
      state('active', style({ display: 'block', height: '*' })),
      state('void', style({ display: 'none', height: 0 })),
      transition(':leave', [
        animate(200, style({ height: 0 }))
      ]),
      transition(':enter', [
        animate(200, style({ height: '*' }))
      ])
    ])
  ]
})

export class SidebarComponent {
  tabs = [
    {
      id: 0,
      name: '库存管理',
      sub: [
        { name: '库存一览', addr: 'goods' },
        { name: '入库', addr: 'warehouse' }
      ],
      icon: 'fa-cogs'
    }, {
      id: 1,
      name: '销售管理',
      sub: [
        { name: '开单', addr: '' }
      ],
      icon: 'fa-credit-card'
    }, {
      id: 2,
      name: '客户管理',
      sub: [
        { name: '客户信息', addr: '' }
      ],
      icon: 'fa-car'
    }, {
      id: 3,
      name: '会员管理',
      sub: [
        { name: '会员一览', addr: '' }
      ],
      icon: 'fa-users'
    }, {
      id: 4,
      name: '财务管理',
      sub: [
        { name: '财务统计', addr: '' }
      ],
      icon: 'fa-bar-chart'
    }
  ];
  cur:number;

  unfold(n:number):void {
    this.cur = n;
  }
}