import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export interface Login {
  id: string,
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private url = "http://localhost/phptest/"

  constructor(private http: HttpClient) { }

  login() {
    return this.http.get<[Login]>(this.url+"login.php");
  }
}
