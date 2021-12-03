import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterTalentsPage } from './character-talents.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterTalentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterTalentsPageRoutingModule {}
