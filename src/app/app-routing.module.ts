import { PagesModule } from './pages/pages.module';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule)
  },
  {
    path: 'inicio-sesion',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full'
  },
  {
    path: 'principal-alumno',
    redirectTo: 'principal-alumno',
    pathMatch: 'full'
  },
  {
    path: 'principal-docente',
    redirectTo: 'principal-docente',
    pathMatch: 'full'
  },
  {
    path: 'detalle-asignatura-alumno',
    redirectTo: 'detalle-asignatura-alumno',
    pathMatch: 'full'
  },
  {
    path: 'detalle-asignatura-docente',
    redirectTo: 'detalle-asignatura-docente',
    pathMatch: 'full'
  },
  {
    path: 'restablecer-contrasena',
    redirectTo: 'restablecer-contrasena',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
