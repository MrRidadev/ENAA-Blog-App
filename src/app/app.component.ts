import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostFormComponent } from './post/post-form/post-form.component';
import { PostListComponent } from './post/post-list/post-list.component';

import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, NavbarComponent, FooterComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ENAABolgApp';
}
