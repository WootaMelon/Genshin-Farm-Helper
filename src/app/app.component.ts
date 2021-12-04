import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router) { }

  redirectToFarmSelector() {
    this.router.navigate(['farmselectorpage']);
  }
  redirectToHome() {
    this.router.navigate(['home']);

  }
  redirectToCharacterTalents() {
    this.router.navigate(['character-talents']);

  }
  redirectToWeaponAscension() {
    this.router.navigate(['weaponascension']);

  }



}
