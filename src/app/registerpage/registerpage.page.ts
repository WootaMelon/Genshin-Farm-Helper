import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../services/api/signup.service';
import { SignupService } from '../services/api/signup.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.page.html',
  styleUrls: ['./registerpage.page.scss'],
})
export class RegisterpagePage implements OnInit {


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registration Failed',
      subHeader: '',
      message: 'Please make sure that Username/Password is not empty and Password is of 8 or more characters',
      buttons: [{
        text: 'OK',
        cssClass: 'secondary'
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registration Failed',
      subHeader: '',
      message: 'Username is Already Taken',
      buttons: [{
        text: 'OK',
        cssClass: 'secondary'
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  constructor(private router: Router, private service: SignupService, public alertController: AlertController, private storage: Storage) { }

  public sendtologin() {
    this.router.navigate(['login-signup']);
  }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const formvalue = form.value;
    if (formvalue.username != "" && formvalue.password.length >= 8) {

      this.service.Signup(formvalue).subscribe(response => {
        console.log(response);
        if (response == 'true') {
          this.storage.set('name', formvalue.username);
          this.router.navigate(['mainpage']);
        }
        else {
          this.presentAlert2();
        }
      });
    }
    else {
      console.log("username or password are too short!");
      this.presentAlert();
    }
  }
}
