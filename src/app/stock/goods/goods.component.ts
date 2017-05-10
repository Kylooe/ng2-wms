import { Component, OnInit, ViewChild } from '@angular/core';

import { GoodsService }                 from '../goods.service';
import { Goods }                        from '../../type';

import { ModalComponent }               from '../../shared/modal/modal.component';
import { DetailComponent }              from './detail.component';

@Component({
  moduleId: module.id,
  selector: 'goods',
  host: {
    '[class.modal-open]': 'modal.isOpened'
  },
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
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
    this.modal.open('新增商品', DetailComponent, { type: 'add' });
  }

  edit(id:number) {
    this.modal.open('修改商品信息', DetailComponent, { type: 'edit', id });
  }

  gotoDetail(id:number) {
    this.modal.open('商品详情', DetailComponent, { type: 'detail', id });
  }

  del(item:Goods):void {
    this.goodsService.delete(item.id)
        .then(() => {
          this.goods = this.goods.filter(i => i!==item);
        });
  }

  reload(need:boolean) {
    if(need) this.ngOnInit();
  }
}