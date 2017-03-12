import { Component, OnInit }   from '@angular/core';

import { GoodsService }        from './goods.service';
import { Goods }               from '../type';

@Component({
  moduleId: module.id,
  selector: 'goods',
  template: `
    <div class="box">
      <p class="box-title">title</p>
      <div class="box-body">
        <div class="panel">
          <search></search>
          <span class="button-group">
            <button (click)="create()">添加</button>
            <button>其他按钮</button>
          </span>
        </div>
        <table>
          <thead>
            <tr>
              <th>名称</th>
              <th>数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of goods">
              <td>{{item.name}}</td>
              <td>{{item.quantity}}</td>
              <td>
                <button (click)="edit(item.id)">修改</button>
                <button (click)="del(item)">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styleUrls: ['../box.css']
})

export class GoodsComponent implements OnInit {
  goods:Goods[];

  constructor(private goodsService:GoodsService) { }

  // 组件创建即获取库存列表
  ngOnInit():void {
    this.goodsService.getGoods().then(goods => this.goods = goods);
  }

  edit(id:number):void {

  }

  del(item:Goods):void {
    this.goodsService.delete(item.id)
    .then(() => {
          this.goods = this.goods.filter(i => i!==item);
        });
  }

  create() {
    
  }
}