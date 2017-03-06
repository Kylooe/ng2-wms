import { Component, OnInit }   from '@angular/core';
import { NgbModal }            from '@ng-bootstrap/ng-bootstrap';

import { GoodsService }        from './goods.service';
import { Goods }               from '../type';
import { CreateItemComponent } from './create.component';

@Component({
  selector: 'goods',
  template: `
    <div class="box">
      <p class="box-title">title</p>
      <div class="box-content">
        <div class="row">
          <search class="col-6"></search>
          <button class="btn btn-sm btn-outline-primary col-1 offset-5" (click)="add()">添加</button>
        </div>
        <table class="table table-hover table-sm">
          <thead>
            <tr>
              <th>名称</th>
              <th>数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tr *ngFor="let item of goods">
            <td>{{item.name}}</td>
            <td>{{item.quantity}}</td>
            <td><button (click)="del(item)">删除</button></td>
          </tr>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .box {
      margin: 25px;
      padding-bottom: 30px;
      background-color: #fff;
      border: 1px solid #ddd;
    }

    .box-title {
      margin: 0;
      padding: 0 15px;
      line-height: 50px;
      border-bottom: 1px solid #ddd;
    }

    .box-content {
      padding: 0 20px;
    }

    .row {
      padding: 20px;
    }

    .table th {
      border-top: none;
    }
  `]
})

export class GoodsComponent implements OnInit {
  goods:Goods[];

  constructor(private goodsService:GoodsService, private modalService: NgbModal) { }

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

  add() {
    this.modalService.open(CreateItemComponent);
  }
}