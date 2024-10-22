import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-docente',
  templateUrl: './principal-docente.component.html',
  styleUrls: ['./principal-docente.component.scss'],
})
export class PrincipalDocenteComponent  implements OnInit {

  qrData: string;

  ngOnInit() {
    const asignatura = 'Nombre Asignatura';
    const docente = 'Nombre Docente';
    const fecha = new Date().toISOString();
    this.qrData = JSON.stringify({ asignatura, docente, fecha });
  }

  constructor() { }

}
