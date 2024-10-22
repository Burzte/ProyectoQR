import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';

@Component({
  selector: 'app-detalle-asignatura-alumno',
  templateUrl: './detalle-asignatura-alumno.component.html',
  styleUrls: ['./detalle-asignatura-alumno.component.scss'],
})
export class DetalleAsignaturaAlumnoComponent {

  scanResult: string | null = null;

  selectedAsignatura: any;

onAsignaturaChange(event: any) {
  this.selectedAsignatura = event.detail.value;
  // Aquí puedes generar el código QR para la asignatura seleccionada
}

  async startScan() {
    try {
      await BarcodeScanner.checkPermission({ force: true });
      await BarcodeScanner.hideBackground(); // Oculta la vista previa
      const result = await BarcodeScanner.startScan(); // Inicia el escaneo

      if (result.hasContent) {
        this.scanResult = result.content; // Guarda el contenido escaneado
      }
    } catch (error) {
      console.error('Error al escanear el código:', error);
    }
  }


  asignaturas = [
    { nombre: 'Base de Datos', codigo: 'BD101', fecha: '22/10/2024', hora: '19:00' },
    { nombre: 'Arquitectura de Software', codigo: 'AS203', fecha: '22/10/2024', hora: '20:00' },
    { nombre: 'Aplicaciones Móviles', codigo: 'AM305', fecha: '22/10/2024', hora: '21:00'  },
  ]

  constructor(private asignaturasService: AsignaturasService) { }
  ngOnInit() {
    this.cargarAsignaturas();
  }

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

}
