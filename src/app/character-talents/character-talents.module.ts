import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterTalentsPageRoutingModule } from './character-talents-routing.module';

import { CharacterTalentsPage } from './character-talents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterTalentsPageRoutingModule
  ],
  declarations: [CharacterTalentsPage]
})
export class CharacterTalentsPageModule {}
