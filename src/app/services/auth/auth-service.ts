import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../../models/user.models';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = 'http://localhost:8000/api/v1';
  constructor(private http: HttpClient) { }

  register(userData: Partial<User>): Observable<any> {
    return this.http.post('/api/register', userData);
  }

  login(credentials: { email: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('/api/login', credentials).pipe(
      tap(response => {
        localStorage.setItem('microCRMToken', response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('microCRMToken');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('microCRMToken');
  }
}
