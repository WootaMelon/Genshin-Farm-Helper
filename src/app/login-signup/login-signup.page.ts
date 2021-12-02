import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.page.html',
  styleUrls: ['./login-signup.page.scss'],
})
export class LoginSignupPage implements OnInit {

  constructor(private router: Router) { }
  public onlogin() {
    // this.router.navigate(['home']);
  }
  public sendtoregister() {
    this.router.navigate(['registerpage']);
  }
  ngOnInit() {
  }

}
