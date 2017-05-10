import { Component, OnInit }            from '@angular/core';

import { GoodsService }                 from '../goods.service';
import { Goods }                        from '../../type';

@Component({
  moduleId: module.id,
  template: `
    <ul>
      <li *ngFor="let item of list" (click)="select(item)">{{item.code}}  {{item.name}}</li>
    </ul>
  `,
  styles: [`
    ul {
      height: 580px;
      list-style: none;
      user-select: none;
      padding: 0;
      overflow: auto;
    }
    li {
      padding: 5px;
      font-size: 1.2em;
      border-top: 1px solid #ddd;
    }
    li:hover {
      cursor: pointer;
      background: #18a689;
      color: #fff;
    }
  `]
})

export class ItemsComponent implements OnInit {
  value:any;  // 使用modal传出去的值
  options:any;
  list:Goods[];

  constructor(private goodsService:GoodsService) { }

  ngOnInit():void {
    this.goodsService.getGoods().then(goods => this.list = goods);
  }

  select(item:Goods):void {
    this.value = { id: item.id, name: item.name, code: item.code };
    this.options.close();
  }
}