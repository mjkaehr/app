import { Component, OnInit } from '@angular/core';

import { posts } from '../posts';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts = posts;

  constructor() { }

  ngOnInit(): void {
  }

}
