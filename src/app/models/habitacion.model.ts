export interface Habitacion {
  id: number;
  nro_habitacion: string;
  name: string;
  type: string;
  price: number;
  capacity: number;
  imageUrl: string;
  nombre_imagen?: string;
  description: string;
  amenities: string[];
  available: boolean;
  cantidad_disponible?: number;
}

