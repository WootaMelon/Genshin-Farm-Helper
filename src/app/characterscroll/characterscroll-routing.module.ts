import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterscrollPage } from './characterscroll.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterscrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterscrollPageRoutingModule {}
