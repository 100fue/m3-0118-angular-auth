import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(public session: SessionService) { }

  ngOnInit() {
  }

  logout() {
    this.session.logout().subscribe(() => console.log("Successfully logged out"));
  }

}
