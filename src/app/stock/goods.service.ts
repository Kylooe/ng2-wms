import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Goods }         from '../type';

@Injectable()
export class GoodsService {
  private goodsUrl = 'api/goods';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) {}

  // 获取库存货物列表
  getGoods():Promise<Goods[]> {
    return this.http.get(this.goodsUrl).toPromise()
               .then(res => res.json().data as Goods[])
               .catch(this.handleError);
  }

  // 删除某项货物
  delete(id:number):Promise<void> {
    const url = `${this.goodsUrl}/${id}`;
    return this.http.delete(url, {headers:this.headers})
               .toPromise()
               .then(() => null)
               .catch(this.handleError);
  }

  private handleError(error:any):Promise<any> {
    console.error('出现了未知错误', error);
    return Promise.reject(error.message || error);
  }

}