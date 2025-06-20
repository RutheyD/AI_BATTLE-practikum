import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }
  login(user: UserLogin): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/User/login`, user);
  }
  saveToken(token: string) {
    console.log('token - '+ token);
    
    sessionStorage.setItem('token', token);
  }
}

