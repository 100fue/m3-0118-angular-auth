import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list

  constructor(private AnimalSession: AnimalService) {
  }

  ngOnInit() {
    this.AnimalSession.getList()
    .map(list => {
      this.list = list
      this.list.forEach(element => {
        this.counterdown(element)
      });
    })
    .subscribe()
  }

  counterdown(element) {
    // Set the date we're counting down to
    console.log('animal time', element.time)
    const countDownDate = new Date(element.time).getTime();

    let x = setInterval(() => {

      // Get todays date and time
      let timer:any = new Date().getTime();

      // Find the distance between now an the count down date
      let distance = countDownDate - timer;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      timer = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

      element.timer = timer
    }, 100);

  }  

}
