import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSignupPageRoutingModule } from './login-signup-routing.module';

import { LoginSignupPage } from './login-signup.page';
import { TopimageComponent } from '../components/topimage/topimage.component';
import { TipsSectionComponent } from '../components/tips-section/tips-section.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginSignupPageRoutingModule
  ],
  declarations: [LoginSignupPage,TopimageComponent,TipsSectionComponent]
})
export class LoginSignupPageModule {}
