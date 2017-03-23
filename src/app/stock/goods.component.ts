import { Component, OnInit, ViewChild } from '@angular/core';

import { GoodsService }                 from './goods.service';
import { Goods }                        from '../type';

import { ModalComponent }               from './modal.component';
import { DetailComponent }              from './detail.component';

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
            <button (click)="add()">添加</button>
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
            <tr *ngFor="let item of goods" (click)="gotoDetail(item.id); $event.stopPropagation()">
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
    <modal #modal></modal>
  `,
  styleUrls: ['../box.css']
})

export class GoodsComponent implements OnInit {
  @ViewChild(ModalComponent) modal:ModalComponent;
  goods:Goods[];

  constructor(private goodsService:GoodsService) { }

  // 组件创建即获取库存列表
  ngOnInit():void {
    this.goodsService.getGoods().then(goods => this.goods = goods);
  }

  add() {
    this.modal.open(DetailComponent, { type: 'add' });
  }

  edit(id:number) {
    this.modal.open(DetailComponent, { type: 'edit', id });
  }

  gotoDetail(id:number) {
    this.modal.open(DetailComponent, { type: 'detail', id });
  }

  del(item:Goods):void {
    this.goodsService.delete(item.id)
    .then(() => {
      this.goods = this.goods.filter(i => i!==item);
    });
  }

}