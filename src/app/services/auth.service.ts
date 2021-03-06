import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt"; //import jwt

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpCLient: HttpClient,
  ) { }

  private jwtHelper: JwtHelperService = new JwtHelperService()

  login(credentials: any) {
    return this.httpCLient.post('/api/authenticate', credentials).pipe(
      map(
        (response: any) => {
          if (response) {
            console.log('response :>> ', response);
            localStorage.setItem('token', response.token);
            return true;
          }
          return false;
        }
      )
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    const [tokenExpDate, isExpired] = [this.jwtHelper.getTokenExpirationDate(token), this.jwtHelper.isTokenExpired(token)];

    // console.log('Ex. date: ', tokenExpDate);
    // console.log('isExpired: ', isExpired);
    return !isExpired;
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) return null;
    return this.jwtHelper.decodeToken(token);
  }

}
