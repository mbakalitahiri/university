import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Inject, Injectable } from '@angular/core';

import { LoginService } from './../login.service';
import { Observable } from 'rxjs';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private loginSvc: LoginService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.loginSvc.status$.subscribe((datos: boolean) => {
      if (datos == false) {
        this.router.navigate(['/login']);
      }
    });
     return true;
  }
}
