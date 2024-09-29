import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-asignatura-alumno',
  templateUrl: './detalle-asignatura-alumno.component.html',
  styleUrls: ['./detalle-asignatura-alumno.component.scss'],
})
export class DetalleAsignaturaAlumnoComponent  implements OnInit {

  showImage = false;

  constructor() { }

  ngOnInit() {}

  toggleImage() {
    this.showImage = !this.showImage;
  }

}
