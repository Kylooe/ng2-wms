import { Injectable }    from '@angular/core';
import { Http }          from '@angular/http';
import { Observable }    from 'rxjs/Observable';

import { Goods, Member }         from '../../type';

@Injectable()
export class SearchService {
  constructor(private http:Http) {}

  search(type:string, item:string):Observable<Object[]> {
    let data = this.http.get(`app/${type}/?name=${item}`);
    switch (type) {
      case "goods":
        return data.map(res => res.json().data as Goods[]);
      case "members":
        return data.map(res => res.json().data as Member[]);
      default:
        // code...
        break;
    }
  }
}