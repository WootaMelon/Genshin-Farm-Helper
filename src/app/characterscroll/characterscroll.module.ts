import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterscrollPageRoutingModule } from './characterscroll-routing.module';

import { CharacterscrollPage } from './characterscroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterscrollPageRoutingModule
  ],
  declarations: [CharacterscrollPage]
})
export class CharacterscrollPageModule {}
