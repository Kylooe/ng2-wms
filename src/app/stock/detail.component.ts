import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Goods }                                          from '../type';
import { GoodsService }                                   from './goods.service';

@Component({
  selector: 'detail',
  template: `
    <div *ngIf="item">
      <div [hidden]="editable">
        <div>
          <span>名称</span> {{item.name}}
        </div>
        <div>
          <span>数量</span> {{item.quantity}}
        </div>
        <button (click)="editable = true">修改</button>
      </div>
      <div [hidden]="!editable">
        <form (ngSubmit)="onSubmit()" #goodsForm="ngForm">
          <div>
            <label for="name">名称</label>
            <input type="text" id="name" [(ngModel)]="item.name" name="name" required>
            <!--
            <div [hidden]="name.valid || name.pristine" class="alert">
              名称不可为空
            </div>
            -->
          </div>
          <div>
            <label for="quantity">数量</label>
            <input type="text" id="quantity" [(ngModel)]="item.quantity" name="quantity">
          </div>
          <button type="submit" [disabled]="!goodsForm.form.valid">保存</button>
        </form>
      </div>
    </div>
  `
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