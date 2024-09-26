import { Component, inject, OnInit } from '@angular/core';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-principal-docente',
  templateUrl: './principal-docente.component.html',
  styleUrls: ['./principal-docente.component.scss'],
})
export class PrincipalDocenteComponent  implements OnInit {

  datosPersonales = inject(DatosPersonalesService);

  nombre: string;

  constructor() { }

  ngOnInit() {
    this.nombre = this.datosPersonales.getNombre();
  }

}
