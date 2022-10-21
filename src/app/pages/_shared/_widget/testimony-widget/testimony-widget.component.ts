import { Component, Input, OnInit } from '@angular/core';
import { Testimony } from 'src/app/_models';

@Component({
  selector: 'app-testimony-widget',
  templateUrl: './testimony-widget.component.html',
  styleUrls: ['./testimony-widget.component.scss']
})
export class TestimonyWidgetComponent implements OnInit {
  @Input() testimony!: Testimony;
  
  constructor() { }

  ngOnInit(): void {
  }

}
