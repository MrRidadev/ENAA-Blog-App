import { Component,OnInit } from '@angular/core';
import { FormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  id = '';
  title = '';
  content = '';
  


  constructor(
    private postService : PostService,
    private router : Router,
  ){}

  createPost(){
    const newPost  = {
      title : this.title,
      content : this.content
    };

    this.postService.creatPost(newPost).subscribe(()=>{
      this.router.navigate(['/posts'])
    });
  }


}