import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-asignatura-docente',
  templateUrl: './detalle-asignatura-docente.component.html',
  styleUrls: ['./detalle-asignatura-docente.component.scss'],
})
export class DetalleAsignaturaDocenteComponent  implements OnInit {

  showImage = false;

  constructor() { }

  ngOnInit() {}

  toggleImage() {
    this.showImage = !this.showImage;
  }

}
