import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterscrollPage } from '../characterscroll/characterscroll.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-farmselectorpage',
  templateUrl: './farmselectorpage.page.html',
  styleUrls: ['./farmselectorpage.page.scss'],
})
export class FarmselectorpagePage implements OnInit {

  constructor(public modalCtrl: ModalController, private router: Router) {
    
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

redirectToWeaponAscension(){
  this.router.navigate(['weaponascension']);
}
  ngOnInit() {

  }

}
