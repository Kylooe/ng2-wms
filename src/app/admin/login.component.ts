import { Component }   from '@angular/core';
import { Router }      from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  template: `
    <h2>LOGIN</h2>
    <button (click)="login()">Login</button>
  `
})

export class LoginComponent {
  constructor(public authService:AuthService, public router:Router) {}

  login() {
    this.authService.login().subscribe(() => {
      if(this.authService.isLoggedIn) {
        let url = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
        this.router.navigate([url]);
      }
    });
  }
}
