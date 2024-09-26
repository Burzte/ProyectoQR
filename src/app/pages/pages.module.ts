import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DetalleAsignaturaAlumnoComponent } from './detalle-asignatura-alumno/detalle-asignatura-alumno.component';
import { DetalleAsignaturaDocenteComponent } from './detalle-asignatura-docente/detalle-asignatura-docente.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PrincipalAlumnoComponent } from './principal-alumno/principal-alumno.component';
import { PrincipalDocenteComponent } from './principal-docente/principal-docente.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetalleAsignaturaAlumnoComponent,
    DetalleAsignaturaDocenteComponent,
    InicioSesionComponent,
    PrincipalAlumnoComponent,
    PrincipalDocenteComponent,
    RestablecerContrasenaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule
  ]
})
export class PagesModule { }
