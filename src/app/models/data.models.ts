import { Usuario } from "./bd.models"; // Importar la interface de usuario

// bd.models.ts
export const usuariosSimulados: Usuario[] = [
  {
    id: 1,
    nombreCompleto: 'Admin User',
    usuario: 'admin',
    clave: 'admin',
    telefono: '1234567890'
  },
  {
    id: 2,
    nombreCompleto: 'Florence Kaleb',
    usuario: 'florence',
    clave: 'florence',
    telefono: '0987654321'
  },
  {
    id: 3,
    nombreCompleto: 'Clark Logan',
    usuario: 'clark',
    clave: 'clark',
    telefono: '2345678901'
  },
  {
    id: 4,
    nombreCompleto: 'Skyler Rudolph',
    usuario: 'skyler',
    clave: 'skyler',
    telefono: '3456789012'
  }
];
