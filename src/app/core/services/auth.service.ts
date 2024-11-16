import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  // Serviço fornecido globalmente
})
export class AuthService {
  private apiUrl = 'http://localhost:3333';  // Base URL of your backend API

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/sessions`, { email, password });
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  register(email: string, name: string, phone: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, name, phone, password });
  }
}
