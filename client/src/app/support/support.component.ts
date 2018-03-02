import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  support
  id
  error

  constructor(public AnimalSession: AnimalService,  private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  newSupport(support) {
    console.log(support)
    this.AnimalSession.newSupport(support, this.id)
      .catch(e => this.error = e)
      .subscribe(data => {
        console.log(data)
        //this.router.navigate(['login'])
      });
  }

}
