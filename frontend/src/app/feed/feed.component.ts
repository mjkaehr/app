import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts;

  constructor(
    private http: HttpClient,
    private feedService: FeedService,
  ) { }

  ngOnInit(): void {
    this.posts = this.feedService.getFeed();
  }

  likePost(post){
    this.feedService.putLike(post._id).then(res => {
      post.likes += 1;
    });
  }

}
