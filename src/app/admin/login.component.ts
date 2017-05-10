import { Component }   from '@angular/core';
import { Router }      from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  template: `
    <div class="wrapper">
      <form class="center-block" (ngSubmit)="login()" #loginForm="ngForm">
        <div class="form-group">
          <label>帐号</label>
          <input type="text" class="form-control" [(ngModel)]="user.name" name="name" placeholder="员工账号">
        </div>
        <div class="form-group">
          <label>密码</label>
          <input type="password" class="form-control" [(ngModel)]="user.password" name="password" placeholder="密码">
        </div>
        <button type="submit" class="btn">登录</button>
      </form>
    </div>
  `,
  styles: [`
    .wrapper {
      background-color: #383B42;
      position: fixed;
      width: 100%;
      height: 100%;
    }

    form {
      width: 500px;
      margin: 100px auto;
      padding: 30px 80px 50px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 10px;
    }

    button {
      width: 100%;
      background-color: #18a689;
      color: #fff;
      margin-top: 20px;
    }

    button:hover {
      color: #fff;
    }
  `]
})

export class LoginComponent {
  user = { name: '', password: '' };
  constructor(public authService:AuthService, public router:Router) {}

  login() {
    this.authService.login().subscribe(() => {
      if(this.authService.isLoggedIn) {
        let url = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        this.router.navigate([url]);
      }
    });
  }
}
