import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router, private storage: Storage) { }

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

  async ngOnInit() {

    await this.storage.create();
  }

}
