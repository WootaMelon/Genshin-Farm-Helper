import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeaponascensionPageRoutingModule } from './weaponascension-routing.module';

import { WeaponascensionPage } from './weaponascension.page';
import { TopimageComponent } from '../components/topimage/topimage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeaponascensionPageRoutingModule
  ],
  declarations: [WeaponascensionPage, TopimageComponent]
})
export class WeaponascensionPageModule { }
