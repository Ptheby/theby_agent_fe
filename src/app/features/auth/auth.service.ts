import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    const apiUrl =environment.apiUrl;
    return this.http.post<{ token: string }>(apiUrl, {
      email,
      password,
    });
  }

  setToken(token: string) {
		localStorage.setItem('token', token);
		this.tokenSubject.next(token);
	}
  getToken() {
		return localStorage.getItem('token');
	}

  isLoggedIn() {
		return !!this.getToken();
	}
  logout() {
		localStorage.removeItem('token');
		this.tokenSubject.next(null);
		this.router.navigate(['/login']);
	}


  signUp(user: any) {
    const apiUrl =environment.apiUrl;
    return this.http.post(apiUrl+'/users/create_with_agent', user)
  }}
