import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; // new import

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router) { } // Router injected here

  logout() {
    this.authService.logout();
  }

  isLoginPage() { // new function
    return this.router.url === '/login';
  }
}
