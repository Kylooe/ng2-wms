import { Component, OnInit } from '@angular/core';
import { Router}   from '@angular/router';
import { StoreService } from '../store.service';
import { Store } from '../store';


@Component({
	moduleId: module.id,
	selector	: 'storeQuery',
	templateUrl : './store.query.html'
})
export class StoreQueryComponent{
  	stores: Store[];
  	store: Store[];
  	submitted: boolean = false;
	constructor(
		private storeService : StoreService,
		private router : Router
	){}
	ngOnInit():void{
		this.storeService.getStores().then( stores => {
			this.stores = stores;
		})
	}
	onSubmit(id:string):void{
		this.storeService.getStore(id).then( store => {
			this.store = store;
			this.submitted = true;
		})
	}
	look(id:string,flag:boolean):void{
		if(!flag){
			this.router.navigate(['/beehive/storeDetail',id]);
		}else{
			this.router.navigate(['/beehive/storeModify',id]);
		}
	}
	delete(item:Store,flag:boolean):void{
		this.storeService.delete(item.id)
		.then(() => {
			if(!flag){
				this.stores = this.stores.filter((h:Store) => h !== item);
			}else{
				this.store = this.store.filter((h:Store )=> h !== item);
			}	       	        
	    });
	}
}