import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/_models';

@Component({
  selector: 'app-blog-widget',
  templateUrl: './blog-widget.component.html',
  styleUrls: ['./blog-widget.component.scss']
})
export class BlogWidgetComponent implements OnInit {
  @Input() blog!: Blog;

  constructor() { }

  ngOnInit(): void {
  }

}
