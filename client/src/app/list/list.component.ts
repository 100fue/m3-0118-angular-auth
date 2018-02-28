import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Array<any>;

  constructor(public session: SessionService) {
    this.session.getList().subscribe(list => this.list = list);
  }

  ngOnInit() {
  }

}
