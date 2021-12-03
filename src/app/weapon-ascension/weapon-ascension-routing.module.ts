import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeaponAscensionPage } from './weapon-ascension.page';

const routes: Routes = [
  {
    path: '',
    component: WeaponAscensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeaponAscensionPageRoutingModule {}
