import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterscrollPage } from '../characterscroll/characterscroll.page';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-farmselectorpage',
  templateUrl: './farmselectorpage.page.html',
  styleUrls: ['./farmselectorpage.page.scss'],
})
export class FarmselectorpagePage implements OnInit {

  resincount: string

  weeklyReset: string
  constructor(public modalCtrl: ModalController, private router: Router, private storage: Storage) {

  }


  // public CharacterSelector(){
  //   this.router.navigate(['characterscroll']);
  // }
  async showModal() {
    const modal = await this.modalCtrl.create({
      component: CharacterscrollPage
    });
    return await modal.present();
  }

  redirectToWeaponAscension() {
    this.router.navigate(['weaponascension']);
  }
  ngOnInit() {
    setTimeout(() => {
      this.storage.get('resin').then((val) => {
        this.resincount = val;

      });
    }, 100);

  }

  WeeklyCountDown() {
    let d = new Date();
    d.setHours(5);
    d.setMinutes(0);
    d.setSeconds(0);
    var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    let countDownDate = d.setDate(diff + 7);
    // Update the count down every 1 second
    let x = setInterval(function () {

      // Get todays date and time
      let now = new Date().getTime();
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);


      // Output the result in an element with id="demo"
      this.weeklyReset = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    }, 1000);
  }

}
