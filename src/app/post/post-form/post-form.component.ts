import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  id = '';
  title = '';
  content = '';

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Si on est en mode édition, on récupère l'ID du paramètre et on charge les données
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.postService.getPostById(this.id).subscribe((post: any) => {
        this.title = post.title;
        this.content = post.content;
      });
    }
  }

  savePost(): void {
    const newPost = { title: this.title, content: this.content };
    if (this.id) {
      this.updatePost(newPost);
    } else {
      this.createPost(newPost);
    }
  }

  createPost(post: any): void {
    this.postService.createPost(post).subscribe(() => {
      this.router.navigate(['/post']);
    });
  }

  updatePost(post: any): void {
    this.postService.updatePost(this.id, post).subscribe(() => {
      this.router.navigate(['/post']);
    });
  }
}
