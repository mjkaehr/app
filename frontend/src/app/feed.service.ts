import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FeedService {

  constructor(
    private http: HttpClient
  ) { }

  getFeed() {
    // Get all posts from data base
    console.log('fetching posts...');
    return this.http.get('http://localhost:5000/api/posts');
  }

  putLike(postId: string) {
    // Like a post
    return this.http.put('http://localhost:5000/api/posts/like', { postId }).toPromise();
  }

  createPost(username, text) {
    return this.http.post('http://localhost:5000/api/posts/create', { username,text }).toPromise();
  }
}
