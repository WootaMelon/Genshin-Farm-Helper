import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmselectorpagePageRoutingModule } from './farmselectorpage-routing.module';

import { FarmselectorpagePage } from './farmselectorpage.page';
import { TopimageComponent } from '../components/topimage/topimage.component';
import { TipsSectionComponent } from '../components/tips-section/tips-section.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmselectorpagePageRoutingModule
  ],
  declarations: [FarmselectorpagePage,TopimageComponent,TipsSectionComponent]
})
export class FarmselectorpagePageModule {}
