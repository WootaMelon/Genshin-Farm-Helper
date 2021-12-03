import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmselectorpagePage } from './farmselectorpage.page';

const routes: Routes = [
  {
    path: '',
    component: FarmselectorpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmselectorpagePageRoutingModule {}
