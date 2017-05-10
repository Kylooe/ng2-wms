import { Component, OnInit } from '@angular/core';
import { Goods }                                          from '../../type';
import { GoodsService }                                   from '../goods.service';

@Component({
  moduleId: module.id,
  selector: 'detail',
  templateUrl: './detail.component.html',
  styles: [`
    img {
      width: 80%;
    }

    button {
      background-color: #18a689;
      color: #fff;
    }

    button:hover {
      background-color: #5fc1ad;
      color: #fff;
    }

    form {
      overflow: auto;
    }
  `]
})

export class DetailComponent implements OnInit {
  editable:boolean;  // 切换详情视图与编辑视图
  value:boolean;  // 列表是否需要刷新数据
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
    let newItem = {
      name: this.item.name,
      code: this.item.code,
      quantity: this.item.quantity,
      price: this.item.price };
    this.goodsService.createGood(newItem)
        .then(item => {
          this.item = item;
          this.editable = false;
          this.options.type = 'edit';
          this.value = true;
        });
  }

  update():void {
    this.goodsService.update(this.item)
        .then(() => {
          this.editable = false;
          this.value = true;
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