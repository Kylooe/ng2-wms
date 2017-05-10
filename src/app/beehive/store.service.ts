import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Store } from './store';


@Injectable()
export class StoreService {
  private storesUrl = 'api/store';  // URL to web api

  constructor(private http: Http) { }

  getStores(): Promise<Store[]>{
    return this.http.get(this.storesUrl)
               .toPromise()
               .then(response => {
	    			return response.json().data as Store[]
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  getStore(id: string, storeLocation?:string): Promise<Store[]>{
      const url = `${this.storesUrl}/?id=${id}`;
	  return this.http.get(url)
	    .toPromise()
	    .then(response => {
	    	return response.json().data as Store[]
	    })
	    .catch(this.handleError);
	}
	private headers = new Headers({'Content-Type': 'application/json'});

	delete(id: string): Promise<void> {
	    const url = `${this.storesUrl}/${id}`;
	    return this.http.delete(url, {headers: this.headers})
	      .toPromise()
	      .then(() => {
	      	 return	null;
	      	})
	      .catch(this.handleError);
	}

	update(store: Store): Promise<Store> {
	  const url = `${this.storesUrl}/${store.id}`;
	  return this.http
	    .put(url, JSON.stringify(store), {headers: this.headers})
	    .toPromise()
	    .then(() => store)
	    .catch(this.handleError);
	}

	//尝试
	/*tryw(): Promise<any>{
		const url = 'http://172.29.23.53:8080/sh/user/getImage';
		return this.http.get(url)
	    .toPromise()
	    .then(response => {
	    	return response.json().data as any
	    })
	    .catch(this.handleError);
	}*/


}