import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { PanelService } from '../../services/panel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.css']
})
export class PanelControlComponent implements OnInit {

  user: any;
  support
  error


  constructor(public session: SessionService, public sessionPanel: PanelService, private router: Router) { }

  ngOnInit() {
    this.session.user
      .subscribe((user) => {
        this.user = user;
        console.log(this.user)
      });

    this.sessionPanel.getAnimalPanel(this.user._id)
      .subscribe(support => {
        console.log(support)
        this.support = support
      });

  }

  changeUsername() {
    this.sessionPanel.changeUsername(this.user._id, this.user.username)
      .subscribe(data => {
        this.user = data
        console.log(data)
        this.router.navigate(['panel'])
      });
  }

  changeUserPass() {
    this.sessionPanel.changeUserPass(this.user._id, this.user.password)
      .subscribe(data => {
        this.user = data
        this.router.navigate(['panel'])
      });
  }

}
