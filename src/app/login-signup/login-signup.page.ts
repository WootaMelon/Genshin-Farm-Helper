import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoginService } from '../services/api/login.service';
import { Login } from '../services/api/login.service';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.page.html',
  styleUrls: ['./login-signup.page.scss'],
})
export class LoginSignupPage implements OnInit {

  constructor(private router: Router, private service: LoginService, public alertController: AlertController) { }
  // public onlogin() {
  //    this.router.navigate(['mainpage']);
  // }

  public sendtoregister() {
    this.router.navigate(['registerpage']);
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Login Failed',
      subHeader: '',
      message: 'Incorrect Username/Password',
      buttons: [{
        text: 'Try Again',
        cssClass: 'secondary'
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  onSubmit(form: NgForm) {
    const formvalue = form.value;
    if (formvalue.username != "" && formvalue.password.length >= 8) {
      console.log(formvalue);
      this.service.login(formvalue).subscribe(response => {
        console.log(response);
        if (response == 'true') {
          this.router.navigate(['mainpage']);
        }
        else {
          this.presentAlert();
        }
      });
    }
    else {
      console.log("Incorret Username/Password!");
      this.presentAlert();
    }
  }

  ngOnInit() {
  }

}
