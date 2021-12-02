import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterpagePageRoutingModule } from './registerpage-routing.module';

import { RegisterpagePage } from './registerpage.page';
import { TopimageComponent } from '../components/topimage/topimage.component';
import { TipsSectionComponent } from '../components/tips-section/tips-section.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterpagePageRoutingModule
  ],
  declarations: [RegisterpagePage,TopimageComponent,TipsSectionComponent]
})
export class RegisterpagePageModule {}
