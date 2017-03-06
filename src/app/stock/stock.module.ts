import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

import { GoodsService }       from './goods.service';

import { GoodsComponent }     from './goods.component';
import { SearchComponent }    from './search.component';
import { PurchaseComponent }  from './purchase.component';
import { CreateItemComponent } from './create.component';

@NgModule({
  imports:         [ CommonModule, FormsModule ],
  declarations:    [ GoodsComponent, PurchaseComponent, SearchComponent, CreateItemComponent ],
  entryComponents: [ CreateItemComponent ],
  providers:       [ GoodsService ]
})
export class StockModule { }