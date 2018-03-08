import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

@Component({
 selector: 'app-nav-bar',
 templateUrl: './nav-bar.component.html',
 styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

 user: any;
 isAuthenticated: boolean = false;

 constructor(public session: SessionService, private router: Router) { }

 ngOnInit() {
   this.session.user
     .subscribe((user) => {
       this.user = user;
     });

   this.session.isLoggedIn()
     .subscribe((isLoggedIn) => {
       this.isAuthenticated = isLoggedIn;
     });
 }

 logout() {
   this.session.logout().subscribe(() => {
     this.router.navigate(['/']);
   });
 }

}
