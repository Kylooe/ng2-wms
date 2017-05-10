import { Component, OnInit }            from '@angular/core';
import { Router }                       from '@angular/router';
import { GoodsService }                 from '../goods.service';
import { Record, Goods }                from '../../type';

@Component({
  moduleId: module.id,
  templateUrl: './records.component.html'
})

export class RecordsComponent implements OnInit {
  records:Record[];
  constructor(private router:Router, private goodsService:GoodsService) { }
  ngOnInit():void {
    this.goodsService.getRecords().then(records => this.records = records);
  }

  more(id:number):void {
    this.router.navigate(['/admin/stock/records', id]);
  }

  del(id:number):void {
    this.goodsService.delRecord(id);
  }
}