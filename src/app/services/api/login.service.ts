import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export interface Login {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private base_url = "http://localhost/phptest/"

  constructor(private http: HttpClient) { }

  login(login: Login) {
    return this.http.post(this.base_url + "login.php", login);
  }
}
