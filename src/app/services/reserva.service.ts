import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private URL_API_BASE = environment.URL_API_BASE + "/reservas";

  constructor(private http: HttpClient) { }

  crearReserva(reserva: Reserva): Observable<any> {
    // Se envía como un POST enviando el objeto reserva en el body, 
    // lo cual Laravel puede leer exactamente igual que si fuesen parámetros en la URL.
    return this.http.post(`${this.URL_API_BASE}/store_externo`, reserva);
  }
}
