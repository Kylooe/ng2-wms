import { Component, OnInit, ViewChild } from '@angular/core';

import { GoodsService }                 from '../goods.service';
import { Goods }                        from '../../type';

import { ModalComponent }               from '../../common/modal/modal.component';
import { DetailComponent }              from './detail.component';

@Component({
  moduleId: module.id,
  selector: 'goods',
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

  reload(need:boolean) {
    if(need) this.ngOnInit();
  }
}