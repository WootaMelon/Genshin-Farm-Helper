import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainpagePageRoutingModule } from './mainpage-routing.module';

import { MainpagePage } from './mainpage.page';
import { TopimageComponent } from '../components/topimage/topimage.component';
import { TipsSectionComponent } from '../components/tips-section/tips-section.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainpagePageRoutingModule
  ],
  declarations: [MainpagePage,TopimageComponent,TipsSectionComponent]
})
export class MainpagePageModule {}
