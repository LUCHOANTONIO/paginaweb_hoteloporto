export interface Reserva {
  fecha_ini: string;
  fecha_fin: string;
  nro_documento: string;
  nombre: string;
  primer_apellido: string;
  segundo_apellido?: string;
  telefono: string;
  detalle?: string;
  habitacion_id?: number;
  tipo_habitacion_id?: number;
}
