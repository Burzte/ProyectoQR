export interface UsuarioAPI {
  user: string;
  pass: string;
  name: string;
  phone: string;
  role: string;
  id: string; // Agregar el id al interface para que coincida con el modelo en la base de datos
}
