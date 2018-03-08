import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { SessionService } from '../services/session.service';


@Injectable()
export class AppAuthGuard implements CanActivate {

 constructor(private authService: SessionService, private router: Router) {}

 // return an observable with a boolean value true or false
 // if the user is allow or not to see the page
 canActivate() {
   return this.authService.auth().map(() => true);
 }
}
