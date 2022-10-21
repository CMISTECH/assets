import { Component, OnInit } from '@angular/core';

import { Vehicle } from 'src/app/_models';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {
  bookingStatus: number = 1;

  vehicles: Vehicle[] = [
    { id: '', imageURL: '../../../assets/images/car_1.jpg', brand: 'Cheverolet', model: 'Mercedes Grand Sedan', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_2.jpg', brand: 'Subaru', model: 'Range Rover', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_3.jpg', brand: 'Cheverolet', model: 'Mercedes Grand Sedan', price: '500'}    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
