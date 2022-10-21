import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { Blog, Testimony, Vehicle } from 'src/app/_models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vehicles: Vehicle[] = [
    { id: '', imageURL: '../../../assets/images/car_1.jpg', brand: 'Cheverolet', model: 'Mercedes Grand Sedan', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_2.jpg', brand: 'Cheverolet1', model: 'Mercedes Grand Sedan', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_3.jpg', brand: 'Cheverolet', model: 'Mercedes Grand Sedan', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_4.jpg', brand: 'Cheverolet', model: 'Mercedes Grand Sedan', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_5.jpg', brand: 'Cheverolet', model: 'Mercedes Grand Sedan', price: '500'}
  ]

  testimonies: Testimony[] = [
    { id: '', imageURL: '../../../assets/images/person_1.jpg', comment: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', name: 'Roger Scott', position: 'Marketing Manager'},
    { id: '', imageURL: '../../../assets/images/person_2.jpg', comment: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', name: 'Roger Scott', position: 'Interface Designer'},
    { id: '', imageURL: '../../../assets/images/person_3.jpg', comment: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', name: 'Roger Scott', position: 'UI Designer'},
    { id: '', imageURL: '../../../assets/images/person_1.jpg', comment: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', name: 'Roger Scott', position: 'Web Developer'},
    { id: '', imageURL: '../../../assets/images/person_2.jpg', comment: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', name: 'Roger Scott', position: 'System Analyst'}
  ]

  blogs: Blog[] = [
    { id: '', imageURL: '../../../assets/images/image_1.jpg', postDate: 'Oct. 29, 2019', userName: 'Roger Scott', messageCount: '3', blogTitle: 'Why Lead Generation is Key for Business Growth'},
    { id: '', imageURL: '../../../assets/images/image_2.jpg', postDate: 'Oct. 29, 2019', userName: 'Roger Scott', messageCount: '3', blogTitle: 'Why Lead Generation is Key for Business Growth'},
    { id: '', imageURL: '../../../assets/images/image_3.jpg', postDate: 'Oct. 29, 2019', userName: 'Roger Scott', messageCount: '3', blogTitle: 'Why Lead Generation is Key for Business Growth'}    
  ]

  categories = [
    { name: 'Economy Rent', value: 1 },
    { name: 'Luxury Rent', value: 2 },
    { name: 'Adrenaline Experience', value: 3 },
    { name: ' VIP', value: 4 }
  ]
  
  pickupTimes = [
    { name: '12:00pm', value: 1 },
    { name: '12:30pm', value: 2 },
    { name: '01:00pm', value: 3 },
    { name: '01:30pm', value: 4 },
    { name: '02:00pm', value: 3 },
    { name: '02:30pm', value: 4 }
  ]

  featuredCarsOwlOptions: OwlOptions = {
    center: true,
    loop: true,
    autoplay: true,
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

  testimoniOwlOptions: OwlOptions = {
      center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
  }

  playingVideo: boolean = false;
  
  @ViewChild('heroVideo') videoplayer!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  toggleVideo(event: any) {
    this.playingVideo = !this.playingVideo;
    this.playingVideo ? this.videoplayer.nativeElement.play() : this.videoplayer.nativeElement.pause();    
  }

}
