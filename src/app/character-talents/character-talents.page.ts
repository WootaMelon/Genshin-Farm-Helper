import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-talents',
  templateUrl: './character-talents.page.html',
  styleUrls: ['./character-talents.page.scss'],
})
export class CharacterTalentsPage implements OnInit {


days: string
  
  constructor() { 
    let currentDate = new Date();
    let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    this.days = weekdays[currentDate.getDay()];
  }

  ngOnInit() {
  }

}
