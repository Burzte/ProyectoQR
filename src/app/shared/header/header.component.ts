import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  nombre: string;
  datosPersonales = inject(DatosPersonalesService);
  suscriptionDatosPersonales: Subscription;

  constructor() { }

  ngOnInit() {
    this.suscriptionDatosPersonales = this.datosPersonales.nombre$.subscribe(datosPersonales => {
      this.nombre = datosPersonales;
    });
  }
}
