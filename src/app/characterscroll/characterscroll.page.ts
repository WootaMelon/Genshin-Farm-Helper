import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-characterscroll',
  templateUrl: './characterscroll.page.html',
  styleUrls: ['./characterscroll.page.scss'],

})
export class CharacterscrollPage implements OnInit {
  days: string

  constructor(public modalCtrl: ModalController, private router: Router) {
    let currentDate = new Date();
    let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    this.days = weekdays[currentDate.getDay()];
  }

  ngOnInit() {
  }
  onCharacterClick() {
    this.router.navigate(['character-talents']);
    this.modalCtrl.dismiss();
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
}
