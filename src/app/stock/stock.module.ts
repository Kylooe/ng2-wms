import { NgModule }             from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

import { SharedModule }         from '../shared/shared.module';
import { StockRoutingModule }   from './stock.routes';

import { GoodsService }         from './goods.service';
import { StoreService }         from '../beehive/store.service';

import { GoodsComponent }       from './goods/goods.component';
import { DetailComponent }      from './goods/detail.component';
import { WarehousingComponent } from './warehousing/warehousing.component';
import { ItemsComponent }       from './warehousing/items.component';
import { RecordsComponent }     from './records/records.component';
import { RecordComponent }     from './records/record.component';

@NgModule({
  imports:         [ ReactiveFormsModule, SharedModule, StockRoutingModule ],
  declarations:    [ GoodsComponent, DetailComponent,
                     WarehousingComponent, ItemsComponent,
                     RecordsComponent, RecordComponent ],
  entryComponents: [ DetailComponent, ItemsComponent ],
  providers:       [ GoodsService, StoreService ]
})
export class StockModule { }