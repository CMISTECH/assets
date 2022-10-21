import { Component, OnInit } from '@angular/core';

import { Blog, Testimony, Vehicle } from 'src/app/_models';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [
    { id: '', imageURL: '../../../assets/images/image_1.jpg', postDate: 'Oct. 29, 2019', userName: 'Roger Scott', messageCount: '3', blogTitle: 'Why Lead Generation is Key for Business Growth'},
    { id: '', imageURL: '../../../assets/images/image_2.jpg', postDate: 'Oct. 29, 2019', userName: 'Roger Scott', messageCount: '3', blogTitle: 'Why Lead Generation is Key for Business Growth'},
    { id: '', imageURL: '../../../assets/images/image_3.jpg', postDate: 'Oct. 29, 2019', userName: 'Roger Scott', messageCount: '3', blogTitle: 'Why Lead Generation is Key for Business Growth'},
    { id: '', imageURL: '../../../assets/images/image_4.jpg', postDate: 'Oct. 29, 2019', userName: 'Roger Scott', messageCount: '3', blogTitle: 'Why Lead Generation is Key for Business Growth'},
    { id: '', imageURL: '../../../assets/images/image_5.jpg', postDate: 'Oct. 29, 2019', userName: 'Roger Scott', messageCount: '3', blogTitle: 'Why Lead Generation is Key for Business Growth'},
    { id: '', imageURL: '../../../assets/images/image_6.jpg', postDate: 'Oct. 29, 2019', userName: 'Roger Scott', messageCount: '3', blogTitle: 'Why Lead Generation is Key for Business Growth'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
