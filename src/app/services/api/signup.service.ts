import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  username: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private base_url = "http://localhost/phptest/";

  constructor(private http: HttpClient) { }

  Signup(user: User) {
    return this.http.post(this.base_url + "signup.php", user);
  }

}
