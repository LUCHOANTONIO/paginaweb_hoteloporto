import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-location-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-section.html'
})
export class LocationSectionComponent {
  // Coordenadas paramétricas por defecto (Oruro)
  @Input() lat: number = -17.970310;
  @Input() lng: number = -67.112328;
  @Input() zoom: number = 17;

  private sanitizer = inject(DomSanitizer);

  get mapUrl(): SafeResourceUrl {
    const url = `https://maps.google.com/maps?q=${this.lat},${this.lng}&z=${this.zoom}&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
