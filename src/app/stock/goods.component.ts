import { Component, OnInit } from '@angular/core';

import { GoodsService }      from './goods.service';
import { Goods }             from '../type';

@Component({
  selector: 'goods',
  template: `
    <div class="wrapper">
      <div class="bar">
        <search></search>
        <button>添加</button>
        <button>功能键</button>
        <button>功能键</button>
      </div>
      <table>
        <thead>
          <td>名称</td>
          <td>数量</td>
          <td>操作</td>
        </thead>
        <tr *ngFor="let item of goods">
          <td>{{item.name}}</td>
          <td>{{item.quantity}}</td>
          <td><button (click)="del(item)">删除</button></td>
        </tr>
      </table>
    </div>
   `,
   styles: [`
     .wrapper {
       width: 960px;
       margin: 20px auto;
       background-color: #383B42;
       border: 1px solid #383B42;
       border-bottom-width: 15px;
     }

     .bar {
       position: relative;
       margin: 10px 20px;
     }

     .bar button {
       height: 25px;
     }

     table {
       width: 100%;
       border-collapse: collapse;
       text-align: center;
     }

     thead {
       font-weight: bold;
       border-bottom: 1px solid #a8bfde;
     }

     tr:nth-child(even) {
       background-color: #d3dfed;
     }

     thead, tr:nth-child(odd) {
       background-color: #fff;
     }

     tr:hover {

     }

     td {
       padding: 5px 10px;
       color: #5c7ca2;
     }

     button {
       border: none;
       border-radius: 5px;
       color: #fff;
       background-color: #5b7da3;
     }

     button:hover {
       background-color: #69bee7;
       cursor: pointer;
     }
   `]
})

export class GoodsComponent implements OnInit {
  goods:Goods[];

  constructor(private goodsService:GoodsService) { }

  // 组件创建即获取库存列表
  ngOnInit():void {
    this.goodsService.getGoods().then(goods => this.goods = goods);
  }

  del(item:Goods):void {
    this.goodsService.delete(item.id)
    .then(() => {
          this.goods = this.goods.filter(i => i!==item);
        });
  }
}