import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { newRecord, Item, Goods }       from '../../type';
import { GoodsService }                 from '../goods.service';

import { Store }                        from '../../beehive/store';
import { StoreService }                 from '../../beehive/store.service';

import { ModalComponent }               from '../../shared/modal/modal.component';
import { ItemsComponent }               from './items.component';

@Component({
  moduleId: module.id,
  templateUrl: './warehousing.component.html',
  styles: [`
    .panel-body {
      padding: 30px;
    }

    .table {
      margin-bottom: 10px;
    }

    tbody td {
      line-height: 34px;
    }

    .btn {
      background-color: #18a689;
      color: #fff;
    }

    .btn:hover {
      background-color: #5fc1ad;
      color: #fff;
    }

    p {
      margin: 10px 0 0;
      padding-top: 10px;
      padding-right: 15%;
      text-align: right;
      font-size: 1.5em;
      color: #18a689;
      border-top: 2px solid #ddd;
    }
  `],
  host: {
    '[class.modal-open]': 'modal.isOpened'
  }
})
export class WarehousingComponent implements OnInit {
  @ViewChild(ModalComponent) modal:ModalComponent;
  stores:Store[];  // 仓库
  form:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private goodsService: GoodsService,
    private storeService: StoreService) {

    this.form = this.formBuilder.group({
            time: ['', Validators.required],
            store: [0, Validators.required],
            charge: ['', Validators.required],
            code: ['', Validators.required],
            list: this.formBuilder.array([]),
            total: 0,
            remark: ''
        });
    this.cal();
  }

  ngOnInit():void {
    this.storeService.getStores().then(stores => this.stores = stores);
  }

  get list():FormArray {
    return this.form.get('list') as FormArray;
  };

  selected(good:any):void {
    const item = this.formBuilder.group({
      id: good.id,
      code: good.code,
      name: good.name,
      quantity: ['', Validators.required], 
      price: ['', Validators.required],
      total: 0
    });
    this.list.push(item);
    const quantity = item.get('quantity'), price = item.get('price'), total = item.get('total');
    quantity.valueChanges.distinctUntilChanged().subscribe(
      (value:string) => {
        total.setValue(+quantity.value * +price.value);
      });
    price.valueChanges.distinctUntilChanged().subscribe(
      (value:string) => { total.setValue(+quantity.value * +price.value); });
  }

  add():void {
    this.modal.open('选择入库商品', ItemsComponent, { close:()=>{this.modal.close();} });
  }

  del(index:number):void {
    this.list.removeAt(index);
  }

  cal():void {
    this.list.valueChanges.distinctUntilChanged().subscribe(
      () => {
        let total = 0;
        this.list.value.forEach((item:any)=>{ total += item.total; })
        this.form.get('total').setValue(total);
      }
    );
  }

  onSubmit():void {
    const record = this.form.value;
    record.list.forEach(
      (item:Item) => {
        let good:Goods;
        this.goodsService.detail(item.id).then(result => {
          good = result;
          good.quantity = Number(good.quantity) + Number(item.quantity);
          this.goodsService.update(good).then(() => { console.log(good.quantity); });
        });
      }
    );
  /*  this.goodsService.createRecord(record)
        .then(() => {
          //this.location.back();
        }); */
  }
}