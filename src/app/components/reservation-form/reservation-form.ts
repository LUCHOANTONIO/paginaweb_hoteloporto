import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reservation-form.html'
})
export class ReservationFormComponent {
  reservationForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern('^[0-9A-Za-z]{8,12}$')]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      this.isSubmitted = true;
      console.log('Reserva realizada:', this.reservationForm.value);
      setTimeout(() => {
        this.isSubmitted = false;
        this.reservationForm.reset();
      }, 4000);
    } else {
      this.reservationForm.markAllAsTouched();
    }
  }
}
