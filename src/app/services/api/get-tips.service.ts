import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Tips {
  id: string,
  tip_text: string
}

@Injectable({
  providedIn: 'root'
})
export class GetTipsService {
  private base_url = "http://localhost/phptest/"

  constructor(private http: HttpClient) { }
  getTips() {
    return this.http.get<[Tips]>(this.base_url + "getTips.php");
  }
}
