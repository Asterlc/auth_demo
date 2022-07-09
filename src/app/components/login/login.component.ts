import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin!: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  signIn(credentials: any) {
    this.authService.login(credentials)
      .subscribe(
        {
          next: result => {
            if (result)
              this.router.navigate(['/']);
          },
          error: error => {
            this.invalidLogin = true;

            console.log(error);
          }
        }
      );
  }
}
