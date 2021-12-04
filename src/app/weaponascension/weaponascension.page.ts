import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weaponascension',
  templateUrl: './weaponascension.page.html',
  styleUrls: ['./weaponascension.page.scss'],
})
export class WeaponascensionPage implements OnInit {
  days: string
  constructor() {
    let currentDate = new Date();
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.days = weekdays[currentDate.getDay()];

  }

  ngOnInit() {
  }

}
