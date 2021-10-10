import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { PostsService } from './service/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient, private postsService: PostsService) {
  }

  ngOnInit() {
    this.postsService.fetcPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
    });
  }

  onCreatePost = (postData: Post) => this.postsService.createAndStorePost(postData.title, postData.content);

  onFetchPosts = () => this.fetcPosts();

  onClearPosts = () => this.postsService.deletePosts().subscribe(() => this.loadedPosts = []);

  onHandleError = () => this.error = null;

  private fetcPosts = () => {
    this.isFetching = true;
    this.postsService.fetcPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
    });
  };

}
