import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin!: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  signIn(credentials: any) {
    this.authService.login(credentials)
      .subscribe(
        {
          next: result => {
            if (result) {
              let returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl');
              this.router.navigate([returnUrl || '/']);
            }
          },
          error: error => {
            this.invalidLogin = true;

            console.log(error);
          }
        }
      );
  }
}
