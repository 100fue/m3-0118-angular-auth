import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  error: string
  constructor(public session: SessionService) { }
  
  logout() {
    this.session.logout()
      .catch(e => this.error = e)
      .subscribe();
  }
}
