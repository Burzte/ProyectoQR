import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.scss'],
})
export class CerrarSesionComponent  implements OnInit {

  private authService = inject(AuthService);  // Inyecta el servicio de autenticación

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['']); // Redirige al home después de 3 segundos
    }, 3000); // 3000 milisegundos = 3 segundos
    this.authService.logout();  // Cierra la sesión
  }

}
