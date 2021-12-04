import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterTalentsPageRoutingModule } from './character-talents-routing.module';

import { CharacterTalentsPage } from './character-talents.page';
import { TopimageComponent } from '../components/topimage/topimage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterTalentsPageRoutingModule
  ],
  declarations: [CharacterTalentsPage,TopimageComponent]
})
export class CharacterTalentsPageModule {}
