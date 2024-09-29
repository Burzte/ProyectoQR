import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.component.html',
  styleUrls: ['./restablecer-contrasena.component.scss'],
})
export class RestablecerContrasenaComponent  implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {}

  public email: string = ''; // Inicializamos la variable email con una cadena vacía

  async mostrarAlerta() {
    console.log('La función mostrarAlerta() se ha llamado.'); // Agregar un mensaje de registro
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Correo enviado con éxito',
      buttons: ['OK']
    });

    await alert.present();
  }

}
