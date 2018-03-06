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

  constructor(public session: SessionService, public sessionPanel: PanelService) { }

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

}
