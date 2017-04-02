import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router}   from '@angular/router';
import { Location }                 from '@angular/common';
import { StoreService } from '../store.service';
import { Store } from '../store';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector	: 'storeCreate',
	templateUrl : '../storeQuery/store.modify.html',
	styles      : [`
		.form-group{
			margin-bottom: 20px;
		}
	`]
})
export class StoreCreateComponent{
  	store: Store= {
        id :    '',
        storeLocation :  '',
        code :       '',
        time :       '',
        storeTel :        '',
        licenseNum :       '',
        headPeople :  {
          name    :       '',
          tel      :      '',
          email    :      '',
          location :      ''
        }
     };
  	flag: boolean = false;
  	constructor(
	  private storeService: StoreService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private router : Router
	) {}
	goBack():void{
		this.location.back();
	}
	save():void{
		this.storeService.update(this.store)
    	.then(() => this.goBack());
	}
}