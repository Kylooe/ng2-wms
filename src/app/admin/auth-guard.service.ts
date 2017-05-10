import { Injectable }            from '@angular/core';
import { CanActivate, 
         CanActivateChild,
         CanLoad,
         Route,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }   from '@angular/router';

import { AuthService }           from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService:AuthService, private router:Router) {}

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
    let url:string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
    return this.canActivate(route, state);
  }

  canLoad(route:Route):boolean {
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url:string):boolean {
    if(this.authService.isLoggedIn) { return true; }
    this.authService.redirectUrl = url;  // 保存登陆前访问的url
    this.router.navigate(['/login']);  // 跳转到登录页面
    return false;
  }
}