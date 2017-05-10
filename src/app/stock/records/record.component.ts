import { Component, Input, OnInit }     from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import { Location }                     from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { GoodsService }                 from '../goods.service';
import { Record }                       from '../../type';

@Component({
  moduleId: module.id,
  selector  : 'record',
  templateUrl: './record.component.html'
})

export class RecordComponent implements OnInit {
  record:Record;

  constructor(private goodsService:GoodsService, private route:ActivatedRoute, private location:Location) {}

  ngOnInit() {
    this.route.params.switchMap((params:Params) => this.goodsService.getRecord(+params['id']))
        .subscribe(record => this.record = record);
  }

  goBack():void {
    this.location.back();
  }

}