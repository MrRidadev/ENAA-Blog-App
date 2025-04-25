import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http : HttpClient) { }


  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
  }

  creatPost(post: Post): Observable<Post>{
    return this.http.post<Post>(this.apiUrl, post);
  }


  updatePost(post: Post): Observable<Post>{
    return this.http.post<Post>(this.apiUrl, post);
  }
}
