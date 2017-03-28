import { Injectable }    from '@angular/core';
import { Http }          from '@angular/http';
import { Observable }    from 'rxjs/Observable';

import { Goods }         from '../type';

@Injectable()
export class SearchService {
  constructor(private http:Http) {}

  search(item:string):Observable<Goods[]> {
    return this.http.get(`app/goods/?name=${item}`)
               .map(res => res.json().data as Goods[]);
  }
}