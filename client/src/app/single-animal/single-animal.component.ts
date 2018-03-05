import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-animal',
  templateUrl: './single-animal.component.html',
  styleUrls: ['./single-animal.component.css']
})
export class SingleAnimalComponent implements OnInit {

  animal
  timer
  days
  hours
  minutes
  seconds  

  constructor(private AnimalSession: AnimalService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getAnimal(params['id']);
    });
  }

  getAnimal(id) {
    this.AnimalSession.getAnimal(id)
      .map(a => {
        this.animal = a
        console.log(this.animal)
        this.timer = this.animal.time
        this.counterdown()
      })
      .subscribe();
  }

  counterdown() {
    // Set the date we're counting down to
    console.log('animal time', this.animal.time)
    const countDownDate = new Date(this.animal.time).getTime();

    let x = setInterval(() => {

      // Get todays date and time
      this.timer = new Date().getTime();

      // Find the distance between now an the count down date
      let distance = countDownDate - this.timer;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      this.timer = days + "<span> D</span> " + hours + "<span> H</span> "
        + minutes + "<span> M</span> " + seconds + "<span> S</span> ";

      // console.log(this.timer)

      // If the count down is finished, write some text 
      // if (distance < 0) {
      //     clearInterval(x);
      //     document.getElementById("timer").innerHTML = "EXPIRED";
      // }
    }, 100);

  }  
}
