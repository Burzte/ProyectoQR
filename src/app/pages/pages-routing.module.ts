import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleAsignaturaAlumnoComponent } from './detalle-asignatura-alumno/detalle-asignatura-alumno.component';
import { DetalleAsignaturaDocenteComponent } from './detalle-asignatura-docente/detalle-asignatura-docente.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PrincipalAlumnoComponent } from './principal-alumno/principal-alumno.component';
import { PrincipalDocenteComponent } from './principal-docente/principal-docente.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { authGuard } from '../guard/auth.guard';
import { redirectIfAuthGuard } from '../guard/redirect-if-auth.guard';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'detalle-asignatura-alumno', component: DetalleAsignaturaAlumnoComponent, canActivate: [authGuard]},
  { path: 'detalle-asignatura-docente', component: DetalleAsignaturaDocenteComponent, canActivate: [authGuard]},
  { path: '', component: HomeComponent},
  { path: 'inicio-sesion', component: InicioSesionComponent, canActivate: [redirectIfAuthGuard]},
  { path: 'principal-alumno', component: PrincipalAlumnoComponent, canActivate: [authGuard]},
  { path: 'principal-docente', component: PrincipalDocenteComponent, canActivate: [authGuard]},
  { path: 'restablecer-contrasena', component: RestablecerContrasenaComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'cerrar-sesion', component: CerrarSesionComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
