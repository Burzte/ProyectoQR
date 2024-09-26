import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleAsignaturaAlumnoComponent } from './detalle-asignatura-alumno/detalle-asignatura-alumno.component';
import { DetalleAsignaturaDocenteComponent } from './detalle-asignatura-docente/detalle-asignatura-docente.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PrincipalAlumnoComponent } from './principal-alumno/principal-alumno.component';
import { PrincipalDocenteComponent } from './principal-docente/principal-docente.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';

const routes: Routes = [
  { path: 'detalle-asignatura-alumno', component: DetalleAsignaturaAlumnoComponent},
  { path: 'detalle-asignatura-docente', component: DetalleAsignaturaDocenteComponent},
  { path: '', component: InicioSesionComponent},
  { path: 'inicio-sesion', component: InicioSesionComponent},
  { path: 'principal-alumno', component: PrincipalAlumnoComponent},
  { path: 'principal-docente', component: PrincipalDocenteComponent},
  { path: 'restablecer-contrasena', component: RestablecerContrasenaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
