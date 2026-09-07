import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Habitacion } from '../models/habitacion.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  //URL BACKEND
  private URL_API_BASE = environment.URL_API_BASE + "/habitaciones";

  private getTodayStr() { return new Date().toISOString().split('T')[0]; }
  private getTomorrowStr() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  }

  private searchDatesSubject = new BehaviorSubject<{ fechaIni: string, fechaFin: string }>({
    fechaIni: this.getTodayStr(),
    fechaFin: this.getTomorrowStr()
  });

  searchDates$ = this.searchDatesSubject.asObservable();

  constructor(private http: HttpClient) { }

  updateSearchDates(fechaIni: string, fechaFin: string) {
    this.searchDatesSubject.next({ fechaIni, fechaFin });
  }

  // ==============================================================================
  // RESOLVER RUTA DE IMAGEN DINÁMICA SEGÚN nombre_imagen
  // ==============================================================================
  private getImageUrl(nombreImagen?: string): string {
    if (!nombreImagen || typeof nombreImagen !== 'string' || !nombreImagen.trim()) {
      return 'images/hotel_oporto.jpeg';
    }
    const clean = nombreImagen.trim();
    if (clean.startsWith('http://') || clean.startsWith('https://') || clean.startsWith('/')) {
      return clean;
    }
    if (clean.startsWith('images/')) {
      return clean;
    }
    return `images/${clean}`;
  }

  // ==============================================================================
  // OBTENER INFO SEGÚN CATEGORÍA
  // ==============================================================================
  private getRoomInfo(categoria: string): { description: string; amenities: string[]; capacity: number } {
    const cat = categoria.toLowerCase();
    const amenities = ['Desayuno Buffet', 'Agua caliente', 'Wi-fi', 'Tv Cable', 'Estacionamiento (Disponibilidad limitada, contacta con el hotel para reserva)'];

    if (cat.includes('individual') || cat.includes('simple')) {
      return {
        description: 'Disfruta de una agradable estadía en un espacio pensado para quienes viajan solos y buscan comodidad y una agradable vista de la ciudad.',
        amenities,
        capacity: 1
      };
    } else if (cat.includes('familiar') || cat.includes('familia')) {
      return {
        description: 'Amplia y acogedora, pensada para disfrutar de una estadía en familia con espacios adecuados para descansar después de descubrir la ciudad.',
        amenities,
        capacity: 4
      };
    } else if (cat.includes('triple')) {
      return {
        description: 'Una alternativa práctica para familia reducida o grupos pequeños que desean compartir un espacio acogedor e íntimo.',
        amenities,
        capacity: 3
      };
    } else if (cat.includes('cuádruple') || cat.includes('cuadruple') || cat.includes('quadruple')) {
      return {
        description: 'Espacio amplio diseñado para grupos o familias numerosas que buscan compartir una estadía cómoda y bien equipada.',
        amenities,
        capacity: 4
      };
    } else if (cat.includes('quíntuple') || cat.includes('quintuple')) {
      return {
        description: 'Nuestra opción más amplia, ideal para grupos grandes o familias que desean estar juntos en un mismo ambiente confortable.',
        amenities,
        capacity: 5
      };
    } else {
      // Doble / Matrimonial / default
      return {
        description: 'Diseñada para dos personas, ofrece un ambiente cómodo y agradable para viajes de negocios o una escapada en pareja.',
        amenities,
        capacity: 2
      };
    }
  }

  // ==============================================================================
  // LISTAR DISPONIBLES
  // ==============================================================================
  getAvailableRooms(fechaIni: string, fechaFin: string): Observable<Habitacion[]> {
    return this.http.post<any[]>(`${this.URL_API_BASE}/list_externo`, { fecha_ini: fechaIni, fecha_fin: fechaFin }).pipe(
      map(data => data
        .filter(item => item.cantidad_disponible > 0) // Control interno: solo mostramos si hay disponibilidad
        .map(item => {
          const info = this.getRoomInfo(item.categoria);
          return {
            id: item.categoria_id,
            nro_habitacion: '',
            name: item.categoria,
            type: item.categoria,
            price: item.precio,
            capacity: info.capacity,
            imageUrl: this.getImageUrl(item.nombre_imagen),
            nombre_imagen: item.nombre_imagen,
            description: info.description,
            amenities: info.amenities,
            available: true,
            cantidad_disponible: item.cantidad_disponible
          };
        }))
    );
  }

}
