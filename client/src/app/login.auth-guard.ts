import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from '../services/session.service';


@Injectable()
export class LoginAuthGuard implements CanActivate {

  constructor(private authService: SessionService, private router: Router) {}

  //return an observable with a boolean value true or false
  //if the user is allow or not to see the page
  canActivate() {
    return this.authService.isLoggedIn()
      .map((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate(['login']);
        }
        return true;
      });
  }
}