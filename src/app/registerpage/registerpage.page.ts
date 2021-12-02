import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.page.html',
  styleUrls: ['./registerpage.page.scss'],
})
export class RegisterpagePage implements OnInit {

  constructor(private router: Router) { }

  public register() {
    // this.router.navigate(['mainmenu']);
  }

  public sendtologin() {
    this.router.navigate(['login-signup']);
  }
  ngOnInit() {
  }

}
