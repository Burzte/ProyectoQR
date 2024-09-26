import { Component, inject, OnInit } from '@angular/core';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent  implements OnInit {

  nombre: string;
  
  datosPersonales = inject(DatosPersonalesService)

  constructor() { }

  ngOnInit() {}

  saludar(){
    console.log("Hola: " + this.nombre)
  }

  guardarNombre() {
    this.datosPersonales.setNombre(this.nombre);
    console.log("Nombre guardado: " + this.nombre);
  }

}
