import { Component }       from '@angular/core';
import { NgbActiveModal }  from '@ng-bootstrap/ng-bootstrap';

import { GoodsService }    from './goods.service';
import { Goods }           from '../type';

@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">title</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form>
        <div class="form-group">
          <label class="form-control-label" for="name">名称</label>
          <input type="text" class="form-control" id="name" (ngModel)="item.name">
        </div>
        <div class="form-group">
          <label class="form-control-label" for="quantity">数量</label>
          <input type="text" class="form-control" id="quantity" (ngModel)="item.quantity">
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="create()">保存</button>
    </div>
  `
})

export class CreateItemComponent {
  item:Goods;
  constructor(public activeModal:NgbActiveModal, private goodsService:GoodsService) {}

  create():void {
    this.goodsService.update(this.item).then(() => this.activeModal.close('Close click'));
  }
}