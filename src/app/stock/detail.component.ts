import { Component, ViewEncapsulation, OnInit, OnChanges, Input } from '@angular/core';
import { Goods }                    from '../type';
import { GoodsService }             from './goods.service';

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
            <div [hidden]="name.valid || name.pristine" class="alert">
              名称不可为空
            </div>
          </div>
          <div>
            <label for="quantity">数量</label>
            <input type="text" id="quantity" [(ngModel)]="item.quantity" name="quantity">
            <div [hidden]="quantity.valid || quantity.pristine" class="alert">
              数量不可为空
            </div>
          </div>
          <button type="submit" [disabled]="!goodsForm.form.valid">保存</button>
        </form>
      </div>
    </div>
  `
})

export class DetailComponent implements OnInit {
  editable:boolean;

  options:any;
  item:Goods;

  constructor(private goodsService:GoodsService) {}

  ngOnInit():void {
    console.log(this.options);
    if(this.options.type === 'add')  {
      this.item = new Goods();
    } else {
      this.goodsService.detail(this.options.id).then(item => {this.item = item;console.log(this.item);});
    }
    this.editable = this.options.type === 'detail' ? false : true;
    console.log('edit:' + this.editable);
  }

  create():void {
    let newItem = { name: this.item.name, quantity: this.item.quantity };
    this.goodsService.create(newItem)
        .then(item => {
          this.item = item;
          this.editable = false;
          this.options.type = 'edit';
        });
  }

  update():void {
    this.goodsService.update(this.item).then(() => this.editable = false);
  }

  onSubmit():void {
    if(this.options.type==='add') {
      this.create();
    } else {
      this.update();
    }
  }
}