import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DetalleAsignaturaAlumnoComponent } from './detalle-asignatura-alumno/detalle-asignatura-alumno.component';
import { DetalleAsignaturaDocenteComponent } from './detalle-asignatura-docente/detalle-asignatura-docente.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PrincipalAlumnoComponent } from './principal-alumno/principal-alumno.component';
import { PrincipalDocenteComponent } from './principal-docente/principal-docente.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    DetalleAsignaturaAlumnoComponent,
    DetalleAsignaturaDocenteComponent,
    InicioSesionComponent,
    PrincipalAlumnoComponent,
    PrincipalDocenteComponent,
    RestablecerContrasenaComponent,
    RegistrarComponent,
    CerrarSesionComponent,
    NotFoundComponent
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
