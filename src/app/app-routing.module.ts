import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./Pages/friends/friends.module').then( m => m.FriendsPageModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./Pages/people/people.module').then( m => m.PeoplePageModule)
  },
  {
    path: 'estados',
    loadChildren: () => import('./Pages/estados/estados.module').then( m => m.EstadosPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./Pages/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
