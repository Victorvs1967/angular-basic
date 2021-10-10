import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetcPosts();
  }

  onCreatePost = (postData: Post) => this.http.post<{ name: string }>(environment.dbUrl, postData).subscribe(res => console.log(res));

  onFetchPosts = () => this.fetcPosts();

  onClearPosts = () => {};

  private fetcPosts = () => {
    this.isFetching = true;
    this.http.get<{ [key: string]: Post }>(environment.dbUrl).pipe(map((res: any) => {
    const posts: Post[] = [];
    for (const key in res) {
      posts.push({ ...res[key], id: key });
    }
    return posts;
  })).subscribe(posts => {
    this.isFetching = false;
    this.loadedPosts = posts;
  });
};

}
