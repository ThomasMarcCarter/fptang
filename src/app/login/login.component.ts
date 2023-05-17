// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(public authService: AuthService, private router: Router) { }

  login() {
    // In a real app, you would validate the input and send a request to the backend to authenticate the user.
    // If the authentication is successful, you would "log in" the user and navigate to the home page.
    this.authService.login();
    this.router.navigate(['/home']);
  }
}
