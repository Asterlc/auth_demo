import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService) { }

  clearToken(){
    this.authService.logout();
  }

  isLogged(){
    return this.authService.isLoggedIn();
  }
}
