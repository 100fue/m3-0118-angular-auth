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
  

  constructor(public session: SessionService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getListAnimal(params['id']);
    });
  }

  getListAnimal(id) {
    this.session.get(id)
      .subscribe((l) => {
        console.log('QQQ')
        console.log(l)
        this.list = l;
      });
  }

}
