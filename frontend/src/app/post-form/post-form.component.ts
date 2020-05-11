import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedService } from '../feed.service';

import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private feedService: FeedService,
  ) { }

  ngOnInit(): void {
  }

  model = new Post("Anonymous","");

  onSubmit() {

  }

}
