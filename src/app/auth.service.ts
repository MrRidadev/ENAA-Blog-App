import {inject, Injectable} from '@angular/core';
import {Auth, signInWithEmailAndPassword} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private firebaseAuth: Auth) {

  }

  login(email: string, password: string): boolean {
   signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((success  : any)  => {

      localStorage.setItem('login',"true" );

      console.log("Connexion réussie");
      return true;
      
      });
    return false;

  }
}