import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HabitacionService } from '../../services/habitacion.service';
import { Habitacion } from '../../models/habitacion.model';
import { Reserva } from '../../models/reserva.model';
import { ReservaService } from '../../services/reserva.service';
import { HabitacionCardComponent } from '../habitacion-card/habitacion-card';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-habitacion-list',
  imports: [CommonModule, HabitacionCardComponent, ReactiveFormsModule],
  templateUrl: './habitacion-list.html'
})
export class HabitacionListComponent implements OnInit {
  habitaciones: Habitacion[] = [];
  selectedHabitacion: Habitacion | null = null;
  reservationForm!: FormGroup;
  private habitacionService = inject(HabitacionService);
  private reservaService = inject(ReservaService);
  private fb = inject(FormBuilder);
  
  isSubmitting: boolean = false;
  reservaExitosa: boolean = false;

  // Variables para exponer en la vista (opcional)
  fechaLlegada: string = '';
  fechaSalida: string = '';
  isLoading: boolean = true; // Estado de carga inicial
  searchForm!: FormGroup;

  ngOnInit(): void {
    // Escucha cambios en las fechas de búsqueda (del componente Home)
    this.habitacionService.searchDates$.pipe(
      tap(dates => {
        if (this.searchForm) {
          this.searchForm.patchValue(dates, {emitEvent: false});
        } else {
          this.searchForm = this.fb.group({
            fechaIni: [dates.fechaIni, Validators.required],
            fechaFin: [dates.fechaFin, Validators.required]
          });
        }
        this.isLoading = true;
      }), // Muestra el spinner antes de buscar
      switchMap(dates => {
        this.fechaLlegada = dates.fechaIni;
        this.fechaSalida = dates.fechaFin;
        return this.habitacionService.getAvailableRooms(dates.fechaIni, dates.fechaFin);
      })
    ).subscribe({
      next: (data) => {
        this.habitaciones = data;
        this.isLoading = false; // Oculta el spinner al terminar
      },
      error: (err) => {
        console.error('Error al cargar habitaciones', err);
        this.isLoading = false;
      }
    });

    this.reservationForm = this.fb.group({
      fecha_ini: [{value: '', disabled: true}, Validators.required],
      fecha_fin: [{value: '', disabled: true}, Validators.required],
      nro_documento: ['', Validators.required],
      nombre: ['', Validators.required],
      primer_apellido: ['', Validators.required],
      segundo_apellido: [''],
      telefono: ['', Validators.required],
      detalle: ['']
    });
  }

  openReservationModal(habitacion: Habitacion) {
    this.selectedHabitacion = habitacion;
    this.reservaExitosa = false;
    this.reservationForm.reset({
      fecha_ini: this.fechaLlegada,
      fecha_fin: this.fechaSalida
    });
    setTimeout(() => {
      document.getElementById('nroDocumentoInput')?.focus();
    }, 100);
  }

  closeModal() {
    this.selectedHabitacion = null;
  }

  submitReservation() {
    if (this.reservationForm.valid && this.selectedHabitacion) {
      this.isSubmitting = true;
      
      const reservaData: Reserva = {
        // Obtenemos los valores incluyendo los campos deshabilitados (fechas)
        ...this.reservationForm.getRawValue(),
        tipo_habitacion_id: this.selectedHabitacion.id
      };

      this.reservaService.crearReserva(reservaData).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.reservaExitosa = true;
          // Después de 3 segundos cerramos el modal
          setTimeout(() => {
            this.closeModal();
            // Opcionalmente recargar disponibilidad
            this.onSearch(); 
          }, 3000);
        },
        error: (err) => {
          console.error('Error al crear reserva', err);
          this.isSubmitting = false;
          alert('Hubo un error al procesar tu reserva. Intenta nuevamente.');
        }
      });
    }
  }

  onSearch() {
    if (this.searchForm.valid) {
      const { fechaIni, fechaFin } = this.searchForm.value;
      this.habitacionService.updateSearchDates(fechaIni, fechaFin);
    }
  }
}
