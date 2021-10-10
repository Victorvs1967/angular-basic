import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  createAndStorePost = (title: string, content: string) => {
    const postData: Post = { title: title, content: content };
    this.http.post<{ name: string }>(environment.dbUrl, postData).subscribe(res => console.log(res));
  }

  fetcPosts = () => {
    return this.http.get<{ [key: string]: Post }>(environment.dbUrl).pipe(map((res: any) => {
      const posts: Post[] = [];
      for (const key in res) {
        posts.push({ ...res[key], id: key });
      }
      return posts;
    }))
  };

  deletePosts = () => this.http.delete(environment.dbUrl);

}
