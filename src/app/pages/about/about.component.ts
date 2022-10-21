import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { Testimony } from 'src/app/_models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  testimonies: Testimony[] = [
    { id: '', imageURL: '../../../assets/images/person_1.jpg', comment: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', name: 'Roger Scott', position: 'Marketing Manager'},
    { id: '', imageURL: '../../../assets/images/person_2.jpg', comment: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', name: 'Roger Scott', position: 'Interface Designer'},
    { id: '', imageURL: '../../../assets/images/person_3.jpg', comment: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', name: 'Roger Scott', position: 'UI Designer'},
    { id: '', imageURL: '../../../assets/images/person_1.jpg', comment: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', name: 'Roger Scott', position: 'Web Developer'},
    { id: '', imageURL: '../../../assets/images/person_2.jpg', comment: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', name: 'Roger Scott', position: 'System Analyst'}
  ]

  testimoniOwlOptions: OwlOptions = {
    center: true,
    loop: true,
    items: 1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
