import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { User } from './user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Agent } from '../../agent/agent';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  private readonly tokenSubject = new BehaviorSubject<string | null>(null);
  private readonly jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
    this.checkTokenExpiration();
  }

  login(email: string, password: string) {
    const apiUrl = environment.apiUrl;
    return this.http
      .post<{ token: string }>(apiUrl + '/login', {
        email,
        password,
      })
      .pipe(
        catchError((error) => {
          // Handle HTTP errors or custom errors from the server
          return throwError(error);
        })
      );
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
    this.checkTokenExpiration();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {

    return !!this.getToken();
  }
  // isLoggedIn() {
  //   const token = this.getToken();
  //   return !!token && !this.jwtHelper.isTokenExpired(token);
  // }      commenting out to use the above which is used in pickup sports

  logout() {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }

  signUp(user: any) {
    const apiUrl = environment.apiUrl;
    console.log(this.user);
    return this.http.post(apiUrl + '/users/create_with_agent', user);
  }

  getUserInfo(): Observable<User> {
    const apiUrl = environment.apiUrl;

    // Attach the token to the request headers
    const headers = {
      Authorization: `Bearer ${this.getToken()}`
    };

    // Send a GET request to the /user endpoint
    return this.http.get<User>(`${apiUrl}/user`, { headers });

  }
  getCurrentUser(): Observable<User> {
    const apiUrl = environment.apiUrl;
    const token = this.getToken();
    if (!token) {
      throw new Error('JWT token not found in local storage');
    }

    // Decode the JWT token to extract user information
    const decodedToken = this.jwtHelper.decodeToken(token);
    console.log('Decoded JWT token:', decodedToken);

    // Extract user ID from the decoded token
    const userId = decodedToken.user_id;

    // Make a request to fetch user information based on the extracted user ID
    return this.http.get<User>(`${apiUrl}/user/${userId}`).pipe(
      tap(user => {
        // Set the current user property after fetching user information
        this.user.next(user);
      })
    );
  }





  private checkTokenExpiration() {
    const token = this.getToken();
    if (token && this.jwtHelper.isTokenExpired(token)) {
      this.logout();
    }
  }
}
