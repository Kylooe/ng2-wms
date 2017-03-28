import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Goods }                                          from '../../type';
import { GoodsService }                                   from '../goods.service';

@Component({
  moduleId: module.id,
  selector: 'detail',
  templateUrl: './detail.component.html',
})

export class DetailComponent implements OnInit {
  editable:boolean;  // 切换详情视图与编辑视图
  reload:boolean;  // 列表是否需要刷新数据
  options:any;
  item:Goods;

  constructor(private goodsService:GoodsService) {}

  ngOnInit():void {
    if(this.options.type === 'add')  {
      this.item = new Goods();
    } else {
      this.goodsService.detail(this.options.id).then(item => this.item = item);
    }
    this.editable = this.options.type === 'detail' ? false : true;
  }

  create():void {
    let newItem = { name: this.item.name, quantity: this.item.quantity };
    this.goodsService.create(newItem)
        .then(item => {
          this.item = item;
          this.editable = false;
          this.options.type = 'edit';
          this.reload = true;
        });
  }

  update():void {
    this.goodsService.update(this.item)
        .then(() => {
          this.editable = false;
          this.reload = true;
        });
  }

  onSubmit():void {
    if(this.options.type==='add') {
      this.create();
    } else {
      this.update();
    }
  }
}