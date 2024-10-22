import { AuthService } from 'src/app/servicios/auth.service';
import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { UsuarioAPI } from 'src/app/models/UsuarioApi.models';
import { Subscription } from 'rxjs';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';

@Component({
  selector: 'app-detalle-asignatura-docente',
  templateUrl: './detalle-asignatura-docente.component.html',
  styleUrls: ['./detalle-asignatura-docente.component.scss'],
})
export class DetalleAsignaturaDocenteComponent  implements OnInit {

  selectedAsignatura: any;
  qrData: string;
  showQR: boolean = false;

  ngOnInit() {
    const asignatura = 'Nombre Asignatura';
    const docente = 'Nombre Docente';
    const fecha = new Date().toISOString();
    this.qrData = JSON.stringify({ asignatura, docente, fecha });
    this.cargarAsignaturas();
  }

  private AuthService = inject(AuthService);
  usuario: string;

  subscriptionAuthService: Subscription;

  showImage = false;

  onAsignaturaChange(event: any) {
    this.selectedAsignatura = event.detail.value;
    this.generateQR();
  }

  asignaturas = [
    { nombre: 'Base de Datos', codigo: 'BD101', fecha: '22/10/2024', hora: '19:00' },
    { nombre: 'Arquitectura de Software', codigo: 'AS203', fecha: '22/10/2024', hora: '20:00' },
    { nombre: 'Aplicaciones Móviles', codigo: 'AM305', fecha: '22/10/2024', hora: '21:00'  },
  ]

  toggleImage() {
    this.showImage = !this.showImage;
  }
  constructor(private asignaturasService: AsignaturasService) { }

  cargarAsignaturas() {
    this.asignaturasService.getAsignaturas().subscribe(
      (data) => {
        this.asignaturas = data;
      },
      (error) => {
        console.error('Error al cargar las asignaturas', error);
      }
    );
  }

  generateQR() {
    if (this.selectedAsignatura) {
      const fecha = new Date().toLocaleDateString();
      const hora = new Date().toLocaleTimeString();

      this.qrData = `Asignatura: ${this.selectedAsignatura.nombre}\nCódigo: ${this.selectedAsignatura.codigo}\nFecha: ${fecha}\nHora: ${hora}`;
      this.showQR = true;
    }
  }

}
