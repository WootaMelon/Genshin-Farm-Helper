import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeaponAscensionPageRoutingModule } from './weapon-ascension-routing.module';

import { WeaponAscensionPage } from './weapon-ascension.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeaponAscensionPageRoutingModule
  ],
  declarations: [WeaponAscensionPage]
})
export class WeaponAscensionPageModule {}
