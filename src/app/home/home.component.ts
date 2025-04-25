import { Component } from '@angular/core';
import { PostDetailComponent } from "../post-detail/post-detail.component";
import { PostListComponent } from "../post-list/post-list.component";
import { AproposComponent } from "../apropos/apropos.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostDetailComponent, PostListComponent, AproposComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
