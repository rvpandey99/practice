import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user;
  constructor(public auth: AuthService) { }

  logout() {
    this.auth.logout();
  }

}
