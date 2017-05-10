import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn:boolean = false;
  redirectUrl:string;

  login(): Observable<boolean> {
    return Observable.of(true).do(val => this.isLoggedIn = true);  // 模拟访问了API，并返回一个observable
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
