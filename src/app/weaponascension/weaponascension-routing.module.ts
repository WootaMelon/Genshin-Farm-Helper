import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeaponascensionPage } from './weaponascension.page';

const routes: Routes = [
  {
    path: '',
    component: WeaponascensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeaponascensionPageRoutingModule {}
