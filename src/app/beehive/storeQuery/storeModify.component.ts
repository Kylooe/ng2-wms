import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router}   from '@angular/router';
import { Location }                 from '@angular/common';
import { StoreService } from '../store.service';
import { Store } from '../store';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector	: 'storeModify',
	templateUrl : './store.modify.html',
	styles      : [`
		.form-group{
			margin-bottom: 20px;
		}
	`]
})
export class StoreModifyComponent{
  	store  : Store;
  	flag: boolean = true;
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
		    console.log(store)
		    	return	this.store = store[0];
		    });
	}
	goBack():void{
		this.location.back();
	}
	save():void{
		this.storeService.update(this.store)
    	.then(() => this.goBack());
	}
}