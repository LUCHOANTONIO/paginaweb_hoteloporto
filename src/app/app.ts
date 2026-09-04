import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HomeComponent } from './components/home/home';
import { HabitacionListComponent } from './components/habitacion-list/habitacion-list';
import { ServicesSectionComponent } from './components/services-section/services-section';
import { LocationSectionComponent } from './components/location-section/location-section';
import { AboutSectionComponent } from './components/about-section/about-section';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HomeComponent,
    AboutSectionComponent,
    HabitacionListComponent,
    ServicesSectionComponent,
    LocationSectionComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HotelOporto');
}
