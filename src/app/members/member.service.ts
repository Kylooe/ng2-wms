import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Member } from './member';


@Injectable()
export class MemberService {
  private membersUrl = 'api/member';  // URL to web api

  constructor(private http: Http) { }

  getMembers(): Promise<Member[]>{
    return this.http.get(this.membersUrl)
               .toPromise()
               .then(response => {
	    			return response.json().data as Member[]
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  getMember(id: string, memberLocation?:string): Promise<Member[]>{
      const url = `${this.membersUrl}/?id=${id}`;
	  return this.http.get(url)
	    .toPromise()
	    .then(response => {
	    	return response.json().data as Member[]
	    })
	    .catch(this.handleError);
	}
	private headers = new Headers({'Content-Type': 'application/json'});

	delete(id: string): Promise<void> {
	    const url = `${this.membersUrl}/${id}`;
	    return this.http.delete(url, {headers: this.headers})
	      .toPromise()
	      .then(() => {
	      	 return	null;
	      	})
	      .catch(this.handleError);
	}

	update(member: Member): Promise<Member> {
	  const url = `${this.membersUrl}/${member.id}`;
	  return this.http
	    .put(url, JSON.stringify(member), {headers: this.headers})
	    .toPromise()
	    .then(() => member)
	    .catch(this.handleError);
	}

	create(member: Member): Promise<Member> {
	  return this.http
	    .post(this.membersUrl, JSON.stringify(member), {headers: this.headers})
	    .toPromise()
	    .then(res => {
	    	return res.json().data;
	    })
	    .catch(this.handleError);
	}

}