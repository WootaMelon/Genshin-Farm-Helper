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

}
