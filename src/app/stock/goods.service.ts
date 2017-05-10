import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Goods, newRecord, Record } from '../type';

@Injectable()
export class GoodsService {
  private goodsUrl = 'api/goods';
  private recordUrl = 'api/records';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) {}

  // 获取库存货物列表
  getGoods():Promise<Goods[]> {
    return this.http.get(this.goodsUrl).toPromise()
               .then(res => res.json().data as Goods[])
               .catch(this.handleError);
  }

  detail(id:number):Promise<Goods> {
    const url = `${this.goodsUrl}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(res => res.json().data as Goods)
               .catch(this.handleError);
  }

  createGood(item:Object):Promise<Goods> {
    return this.http.post(this.goodsUrl, JSON.stringify(item), {headers:this.headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  update(item:Goods):Promise<Goods> {
    const url = `${this.goodsUrl}/${item.id}`;
    return this.http.put(url, JSON.stringify(item), {headers:this.headers})
               .toPromise().then(() => item).catch(this.handleError);
  }

  // 删除某项货物
  delete(id:number):Promise<void> {
    const url = `${this.goodsUrl}/${id}`;
    return this.http.delete(url, {headers:this.headers})
               .toPromise()
               .then(() => null)
               .catch(this.handleError);
  }

  // 创建入库单
  createRecord(record:newRecord):Promise<Record> {
    return this.http.post(this.recordUrl, JSON.stringify(record), {headers:this.headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  getRecords():Promise<Record[]> {
    return this.http.get(this.recordUrl).toPromise().then(res => res.json().data as Record[])
               .catch(this.handleError);
  }

  getRecord(id:number):Promise<Record> {
    const url = `${this.recordUrl}/${id}`;
    return this.http.get(url).toPromise().then(res => res.json().data as Record)
               .catch(this.handleError);
  }

  delRecord(id:number):Promise<void> {
    const url = `${this.recordUrl}/${id}`;
    return this.http.delete(url, {headers:this.headers}).toPromise().then(() => null)
               .catch(this.handleError);
  }

  private handleError(error:any):Promise<any> {
    console.error('出现了未知错误', error);
    return Promise.reject(error.message || error);
  }

}