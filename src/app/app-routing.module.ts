import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-signup',
    loadChildren: () => import('./login-signup/login-signup.module').then( m => m.LoginSignupPageModule)
  },
  {
    path: 'registerpage',
    loadChildren: () => import('./registerpage/registerpage.module').then( m => m.RegisterpagePageModule)
  },
  {
    path: 'mainpage',
    loadChildren: () => import('./mainpage/mainpage.module').then( m => m.MainpagePageModule)
  },
  {
    path: 'farmselectorpage',
    loadChildren: () => import('./farmselectorpage/farmselectorpage.module').then( m => m.FarmselectorpagePageModule)
  },
  {
    path: 'characterscroll',
    loadChildren: () => import('./characterscroll/characterscroll.module').then( m => m.CharacterscrollPageModule)
  },
  {
    path: 'character-talents',
    loadChildren: () => import('./character-talents/character-talents.module').then( m => m.CharacterTalentsPageModule)
  },
  {
    path: 'weapon-ascension',
    loadChildren: () => import('./weapon-ascension/weapon-ascension.module').then( m => m.WeaponAscensionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
