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

const routes: Routes = [
  { path: 'detalle-asignatura-alumno', component: DetalleAsignaturaAlumnoComponent, canActivate: [authGuard]},
  { path: 'detalle-asignatura-docente', component: DetalleAsignaturaDocenteComponent, canActivate: [authGuard]},
  { path: '', component: InicioSesionComponent},
  { path: 'inicio-sesion', component: InicioSesionComponent, canActivate: [redirectIfAuthGuard]},
  { path: 'principal-alumno', component: PrincipalAlumnoComponent, canActivate: [authGuard]},
  { path: 'principal-docente', component: PrincipalDocenteComponent, canActivate: [authGuard]},
  { path: 'restablecer-contrasena', component: RestablecerContrasenaComponent},
  { path: 'cerrar-sesion', component: CerrarSesionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
