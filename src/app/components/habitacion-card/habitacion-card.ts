import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Habitacion } from '../../models/habitacion.model';

@Component({
  selector: 'app-habitacion-card',
  imports: [CommonModule],
  templateUrl: './habitacion-card.html'
})
export class HabitacionCardComponent {
  @Input() habitacion!: Habitacion;
  @Output() reserve = new EventEmitter<Habitacion>();

  onReserve(event: Event) {
    event.preventDefault();
    this.reserve.emit(this.habitacion);
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target && !target.src.includes('hotel_oporto.jpeg')) {
      target.src = 'images/hotel_oporto.jpeg';
    }
  }
}
