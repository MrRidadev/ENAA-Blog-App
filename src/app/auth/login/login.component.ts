import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Remplace styleUrl par styleUrls
})
export class LoginComponent {
  error: boolean = false;
  fb: FormBuilder = inject(FormBuilder);
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  email : string ="";
  password : string = "";

  authservice : AuthService=inject(AuthService);


  onSubmit(): void {
    console.log (this.email);
    this.authService.login(this.email,this.password);
  }

  
}
