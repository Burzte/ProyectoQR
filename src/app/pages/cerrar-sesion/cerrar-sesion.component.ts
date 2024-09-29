import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.scss'],
})
export class CerrarSesionComponent  implements OnInit {

  private authService = inject(AuthService);  // Inyecta el servicio de autenticación

  constructor() {}

  ngOnInit(): void {
    this.authService.logout();  // Cierra la sesión
  }

}
