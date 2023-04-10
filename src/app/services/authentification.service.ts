import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
 private baseUrl = "https://localhost:7264/api/User/"
  constructor(private http: HttpClient) { }


  signUp(user : any){
    return this.http.post<any>(`${this.baseUrl}register`, user);
  }

  login(user : any){
    return this.http.post<any>(`${this.baseUrl}Authenticate`, user);
  }
}
