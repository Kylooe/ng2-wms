import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router}   from '@angular/router';
import { Location }                 from '@angular/common';
import { StoreService } from '../store.service';
import { Store } from '../store';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector	: 'storeDetail',
	templateUrl : './store.detail.html',
	styles      : [`
		#beehive-store-detail,#beehive-store-people {
			margin-left: 30px;
			margin-top: 20px;
		}
		#beehive-store-people span{
			display: inline-block;
			width: 200px;
		}
	`]
})
export class StoreDetailComponent{
  	store  : Store;
  	constructor(
	  private storeService: StoreService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private router : Router
	) {}
	ngOnInit(): void {
		this.route.params
		    .switchMap((params: Params) => {
		    	return this.storeService.getStore(params['id']);
		    }).subscribe(store => {
		    	return	this.store = store[0];
		    });
	}
	goBack():void{
		this.location.back();
	}
}