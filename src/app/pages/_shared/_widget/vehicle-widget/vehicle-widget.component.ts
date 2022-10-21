import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/_models';

@Component({
  selector: 'app-vehicle-widget',
  templateUrl: './vehicle-widget.component.html',
  styleUrls: ['./vehicle-widget.component.scss']
})
export class VehicleWidgetComponent implements OnInit {
  @Input() vehicle!: Vehicle;
  
  constructor() { }

  ngOnInit(): void {
  }

}
