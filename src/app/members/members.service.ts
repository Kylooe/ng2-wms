import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Member }        from '../type';

@Injectable()
export class MemberService {
  private url = 'api/members';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) {}

  getList():Promise<Member[]> {
    return this.http.get(this.url).toPromise()
               .then(res => res.json().data as Member[])
               .catch(this.handleError);
  }

  detail(id:number):Promise<Member> {
    const url = `${this.url}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(res => res.json().data as Member)
               .catch(this.handleError);
  }

  create(member:Member):Promise<Member> {
    return this.http.post(this.url, JSON.stringify(member), {headers:this.headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  update(member:Member):Promise<Member> {
    const url = `${this.url}/${member.id}`;
    return this.http.put(url, JSON.stringify(member), {headers:this.headers})
               .toPromise().then(() => member).catch(this.handleError);
  }

  // 删除某项货物
  delete(id:number):Promise<void> {
    const url = `${this.url}/${id}`;
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