import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/sessions`, { email, password }).pipe(
      tap((response: any) => {
        console.log('Login response:', response); // Debugging
        localStorage.setItem('authToken', response.token); // Store the token in local storage
      })
    );
  }

  logout(): Observable<any> {
    localStorage.removeItem('authToken'); // Remove the token from local storage
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  register(email: string, name: string, phone: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, name, phone, password });
  }
}
