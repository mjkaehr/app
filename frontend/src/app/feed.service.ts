import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  feedMessages = [];

  constructor(
    private http: HttpClient
  ) { }

  getFeed() {
    // Get feed messages from data base
    return this.http.get('/assets/posts.json');
  }

  addToFeed(posts) {
    
  }
}
