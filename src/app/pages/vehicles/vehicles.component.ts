import { Component, OnInit } from '@angular/core';

import { Vehicle } from 'src/app/_models';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[] = [
    { id: '', imageURL: '../../../assets/images/car_1.jpg', brand: 'Cheverolet', model: 'Mercedes Grand Sedan', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_2.jpg', brand: 'Subaru', model: 'Range Rover', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_3.jpg', brand: 'Cheverolet', model: 'Mercedes Grand Sedan', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_4.jpg', brand: 'Cheverolet', model: 'Mercedes Grand Sedan', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_5.jpg', brand: 'Subaru', model: 'Range Rover', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_6.jpg', brand: 'Cheverolet', model: 'Mercedes Grand Sedan', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_7.jpg', brand: 'Cheverolet1', model: 'Mercedes Grand Sedan', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_8.jpg', brand: 'Subaru', model: 'Range Rover', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_9.jpg', brand: 'Cheverolet', model: 'Mercedes Grand Sedan', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_10.jpg', brand: 'Cheverolet', model: 'Mercedes Grand Sedan', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_11.jpg', brand: 'Subaru', model: 'Range Rover', price: '500'},
    { id: '', imageURL: '../../../assets/images/car_12.jpg', brand: 'Cheverolet', model: 'Mercedes Grand Sedan', price: '500'}
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

  constructor() { }

  ngOnInit(): void {
  }

}
