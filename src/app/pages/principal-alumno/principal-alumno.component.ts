import { Component, inject, OnInit } from '@angular/core';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-principal-alumno',
  templateUrl: './principal-alumno.component.html',
  styleUrls: ['./principal-alumno.component.scss'],
})
export class PrincipalAlumnoComponent  implements OnInit {

  datosPersonales = inject(DatosPersonalesService);

  nombre: string;

  constructor() { }

  ngOnInit() {
    this.nombre = this.datosPersonales.getNombre();
  }

}
