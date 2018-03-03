import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: any;
  isAuthenticated: boolean = false;

  constructor(public session: SessionService) { }

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
    this.session.logout().subscribe(() => console.log("Successfully logged out"));
  }

}
