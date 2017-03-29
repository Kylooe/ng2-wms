import { Injectable }    from '@angular/core';
import { Http }          from '@angular/http';
import { Observable }    from 'rxjs/Observable';

import { Goods }         from '../type';

@Injectable()
export class SearchService {
  constructor(private http:Http) {}

  search(type:string, item:string):Observable<Object[]> {
    let data = this.http.get(`app/${type}/?name=${item}`);
    switch (type) {
      case "goods":
        return data.map(res => res.json().data as Goods[]);
      default:
        // code...
        break;
    }
  }
}