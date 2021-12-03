import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../services/api/signup.service';
import { SignupService } from '../services/api/signup.service';
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.page.html',
  styleUrls: ['./registerpage.page.scss'],
})
export class RegisterpagePage implements OnInit {




  constructor(private router: Router, private service: SignupService) { }

  public register() {
    // this.router.navigate(['mainmenu']);
  }
  // public sendtologin() {
  //   this.router.navigate(['login-signup']);
  // }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const formvalue = form.value;
    this.service.Signup(formvalue).subscribe(response => {
      console.log(response);
    });

  }
}
