import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface updateResin {
  loggedusername: string,
  resincount: string
}
@Injectable({
  providedIn: 'root'
})
export class UpdateresinService {

  private base_url = "http://localhost/phptest/";

  constructor(private http: HttpClient) { }

  updateResin(resin: updateResin) {
    return this.http.post(this.base_url + "updateresin.php", resin);
  }

}
