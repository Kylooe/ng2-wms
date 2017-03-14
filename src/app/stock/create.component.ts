import { Component }       from '@angular/core';

import { GoodsService }    from './goods.service';
import { Goods }           from '../type';

@Component({
  selector: 'modal',
  template: `
    <div class="modal-header">
      <p class="modal-title">title</p>
      <button type="button" class="modal-close" aria-label="Close" (click)="dismiss()">
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
    <div class="modal-body">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="create()">保存</button>
    </div>
  `,
  styles: [``]
})

export class CreateItemComponent {
  item:Goods;
  constructor( private goodsService:GoodsService) {}

  create() {
    
  }
}