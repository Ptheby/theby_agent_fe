import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { User } from './user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Agent } from '../../agent/agent';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private readonly tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private readonly jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
    this.checkTokenExpiration();
  }


  login(email: string, password: string): Observable<{ token: string }> {
    const apiUrl = environment.apiUrl;
    return this.http.post<{ token: string }>(`${apiUrl}/login`, { email, password }).pipe(
      tap((res) => {
        this.setToken(res.token);
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
    this.getUserInfo().subscribe(); // Update user information after setting the token
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
  signUp(user: any): Observable<any> {
    const apiUrl = environment.apiUrl;
    return this.http.post<any>(`${apiUrl}/users/create_with_agent`, user).pipe(
      tap(() => {

      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }



  getUserInfo(): Observable<User> {
    const apiUrl = environment.apiUrl;
    return this.http.get<User>(`${apiUrl}/user`).pipe(
      tap((user) => {
        this.userSubject.next(user);
      })
    );
  }

  getCurrentUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  private checkTokenExpiration(): void {
    const token = this.getToken();
    if (token && this.jwtHelper.isTokenExpired(token)) {
      this.logout();
    } else {
      this.getUserInfo().subscribe(); // Update user information if the token is not expired
    }
  }
}
