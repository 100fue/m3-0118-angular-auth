import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class LoginAuthGuard implements CanActivate {

  constructor(private authService: SessionService, private router: Router) {}

  canActivate() {
    const isAuthenticated = this.authService.isLoggedIn();
    if (!isAuthenticated) {
      this.router.navigate(['login']);
    }
    return Observable.of(true);
  }
}