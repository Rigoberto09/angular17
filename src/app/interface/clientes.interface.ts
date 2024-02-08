export interface Cliente {
    id_cliente: number;
    primer_nombre: string;
    segundo_nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    direccion: string;
    telefono: string;
    correo: string;
    fecha_registro: string;
    usuario_creo: string;
    usuario_borro: string | null;
  }
  // export interface cadenas:string;
  export interface ClienteInset {
    primer_nombre: string;
    segundo_nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    direccion: string;
    telefono: string;
    correo: string;
    fecha_registro: string;
    usuario_creo: string;
    usuario_borro: string | null;
  }