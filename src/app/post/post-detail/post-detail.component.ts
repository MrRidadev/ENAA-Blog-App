import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';  

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: any | null = null;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.postService.getPosts().subscribe(posts => {
        this.post = posts.find(post => this.post.id===+id);
      });
    }
  }
}