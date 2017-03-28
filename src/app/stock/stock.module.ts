import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

import { GoodsService }        from './goods.service';

import { StockRoutingModule }  from './stock.routes';

import { GoodsComponent }      from './goods/goods.component';
import { SearchComponent }     from '../common/search.component';
import { ModalComponent }      from '../common/modal/modal.component';
import { DetailComponent }     from './goods/detail.component';
import { WarehouseComponent }  from './warehouse/warehouse.component';

@NgModule({
  imports:         [ CommonModule, FormsModule, StockRoutingModule ],
  declarations:    [ GoodsComponent, WarehouseComponent, SearchComponent, ModalComponent, DetailComponent ],
  entryComponents: [ DetailComponent ],
  providers:       [ GoodsService ]
})
export class StockModule { }