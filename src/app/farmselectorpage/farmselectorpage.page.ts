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

  timeToCap: number
  weeklyReset: any
  weeklyTask: any
  dailyReset: any
  dailyTask: any

  constructor(public modalCtrl: ModalController, private router: Router, private storage: Storage) {

  }

  calculateCap() {
    let x = 160 - parseInt(this.resincount);
    this.timeToCap = Math.round(((x * 8) / 60));

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
        this.calculateCap();
      });
    }, 100);
    this.WeeklyCountDown();
    this.DailyCountDown();
  }

  WeeklyCountDown() {
    let d = new Date();
    d.setHours(5);
    d.setMinutes(0);
    d.setSeconds(0);
    var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1);
    let countDownDate = d.setDate(diff + 7);

    this.weeklyTask = setInterval(() => {
      // Get todays date and time
      let now = new Date().getTime();
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.weeklyReset = days + 'd ' + hours + 'h '
        + minutes + 'm ' + seconds + 's ';
    }, 1000);

  }

  DailyCountDown() {
    let d = new Date();
    d.setHours(5);
    d.setMinutes(0);
    d.setSeconds(0);

    let countDownDate = d.setDate(d.getDate() + 1);

    this.dailyTask = setInterval(() => {
      // Get todays date and time
      let now = new Date().getTime();
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      // Time calculations for hours, minutes and seconds
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);


      this.dailyReset = hours + 'h '
        + minutes + 'm ' + seconds + 's ';
    }, 1000);
  }
}
