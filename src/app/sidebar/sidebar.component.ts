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
            <a routerLink="./{{tab.path}}/{{item.addr}}" routerLinkActive="active">{{item.name}}</a>
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
      path: 'stock',
      sub: [
        { name: '库存一览', addr: 'goods' },
        { name: '入库', addr: 'warehouse' }
      ],
      icon: 'fa-cogs'
    }, {
      id: 1,
      name: '销售管理',
      path: 'cashier',
      sub: [
        { name: '开单', addr: '' }
      ],
      icon: 'fa-credit-card'
    }, {
      id: 2,
      name: '会员管理',
      path: 'members',
      sub: [
        { name: '会员管理', addr: 'memberQuery' },
        { name: '新建会员', addr: 'memberCreate' }
      ],
      icon: 'fa-users'
    }, {
      id: 3,
      name: '后台管理',
      path: 'beehive',
      sub: [
        { name: '门店管理', addr: 'storeQuery' },
        { name: '新建门店', addr: 'storeCreate' }
      ],
      icon: 'fa-bar-chart'
    }
  ];
  cur:number;

  unfold(n:number):void {
    this.cur = n;
  }
}