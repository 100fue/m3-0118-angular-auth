import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-animal',
  templateUrl: './single-animal.component.html',
  styleUrls: ['./single-animal.component.css']
})
export class SingleAnimalComponent implements OnInit {

  list: Array<any>;

  constructor(public Rs: SessionService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getListAnimal(params['id']);
    });
  }

  getListAnimal(id) {
    this.Rs.get(id)
      .subscribe((l) => {
        this.list = l;
      });
  }

}
