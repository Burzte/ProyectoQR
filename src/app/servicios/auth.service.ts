import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { WebService } from './web.service';
import { UsuarioAPI } from '../models/UsuarioApi.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //para mostrar el estado del login
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // Para mostrar el estado del login
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable(); // Para mostrar el estado del login

  private usuarioSubject = new BehaviorSubject<string>(''); // Para mostrar el nombre del usuario actualmente logueado  // Para mostrar el nombre del usuario
  usuario$ = this.usuarioSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

  private usuarioCompletoSubject = new BehaviorSubject<UsuarioAPI>(null); // Para mostrar el nombre del usuario actualmente logueado  // Para mostrar el nombre del usuario
  usuarioCompleto$ = this.usuarioCompletoSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

  // Agregar un BehaviorSubject para el estado de loginFailed
  private loginFailedSubject = new BehaviorSubject<boolean>(false); // Para mostrar si falló la autenticación
  loginFailed$ = this.loginFailedSubject.asObservable(); // Para mostrar si falló la autenticación

  webservice = inject(WebService); // Obtener el servicio de webService

  async obtenerAsignaturas(): Promise<any[]> {
    const url = 'https://66f8c0722a683ce97310157b.mockapi.io/api/v1/asignaturas'; // Endpoint correcto
    try {
      const res = await this.webservice.request('GET', url, '') as any[]; // Realiza la solicitud GET
      return res; // Devuelve las asignaturas obtenidas
    } catch (error) {
      console.error('Error al obtener asignaturas:', error);
      throw error; // Manejo del error
    }
  }

  async buscarBD(usuario: string, clave: string){
    const url = 'https://66f8c0722a683ce97310157b.mockapi.io/api/v1/'
    const res = await this.webservice.request('GET', url, 'users') as Array<UsuarioAPI>;

    const user = res.find(u => u.user === usuario && u.pass === clave); // Buscar un usuario en la lista de usuarios de la API
    if (user) {
      console.log('Autenticación exitosa!');  // Autenticación exitosa!
      console.log(user);  // Nombre completo: Hel
      this.isAuthenticatedSubject.next(true); // Activar el estado de autenticación si la autenticación es correcta.
      this.usuarioSubject.next(user.name); // Actualizar el nombre completo del usuario autenticado.
      this.usuarioCompletoSubject.next(user); // Actualizar el usuario completo como objeto del usuario autenticado.
      this.loginFailedSubject.next(false); // Restablecer loginFailed a false
    } else {
      this.isAuthenticatedSubject.next(false); // Desactivar el estado de autenticación si la autenticación es incorrecta.
      this.loginFailedSubject.next(true); // Establecer loginFailed a true si falla la autenticación
    }
  }

  async registrarNuevoUsuario(usuario: any) {
    const url = 'https://66f8c0722a683ce97310157b.mockapi.io/api/v1/';
    try {
      // Verifica si el usuario ya existe antes de registrarlo
      const usuariosExistentes = await this.obtenerUsuarios();
      const usuarioExistente = usuariosExistentes.find(u => u.user === usuario.user);

      if (usuarioExistente) {
        throw new Error('El usuario ya existe');
      }

      const res = await this.webservice.request('POST', url, 'users', usuario);
      console.log('Usuario registrado con éxito', res);
      return res; // Devuelve la respuesta exitosa del registro
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      throw error; // Propaga el error para manejarlo en el componente
    }
  }

    // Método para verificar si el usuario ya existe
    async obtenerUsuarios(): Promise<UsuarioAPI[]> {
      const url = 'https://66f8c0722a683ce97310157b.mockapi.io/api/v1/';
      try {
        const res = await this.webservice.request('GET', url, 'users') as Array<UsuarioAPI>;
        return res; // Devuelve la lista de usuarios existentes
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw error; // Manejo del error
      }
    }


  logout(): void {
    this.usuarioSubject.next('');  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  //
    this.usuarioCompletoSubject.next(null);
    this.isAuthenticatedSubject.next(false); // Desloguearse y desactivar el estado de autenticación.  // Desloguearse y
    this.loginFailedSubject.next(false);  // Restablecer loginFailed al cerrar sesión
  }

  isLoggedIn() {
    return this.isAuthenticated$; // Retornar el estado de autenticación
  }



}
