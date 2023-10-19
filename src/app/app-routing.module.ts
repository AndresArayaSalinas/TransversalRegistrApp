import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'

const redirectToLogin = () => redirectUnauthorizedTo(['/login']);


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
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'menu',
    canActivate:[AngularFireAuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'captura-qr',
    canActivate:[AngularFireAuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/captura-qr/captura-qr.module').then( m => m.CapturaQrPageModule)
  },
  {
    path: 'asistencia',
    canActivate:[AngularFireAuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./pages/restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },

  {
    path: 'perfil',
    canActivate:[AngularFireAuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },

  {
    path: ':num/asistencia',
    canActivate:[AngularFireAuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/asistencia/asistencia-routing.module').then( m => m.AsistenciaPageRoutingModule)
  },
  {
    path: 'lector-qr',
    canActivate:[AngularFireAuthGuard],
    loadChildren: () => import('./modals/lector-qr/lector-qr.module').then( m => m.LectorQrPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
