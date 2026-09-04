import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.html'
})
export class ServicesSectionComponent {
  private sanitizer = inject(DomSanitizer);

  private sanitize(path: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(`<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">${path}</svg>`);
  }

  serviceGroups: { title: string; icon: SafeHtml; image?: string; description?: string; items?: string[] }[] = [
    {
      title: 'Desayuno Buffet',
      icon: this.sanitize('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>'),
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80',
      description: 'Comienza tu día con una propuesta pensada para acompañarte antes de una jornada de trabajo o de descubrir nuestra hermosa ciudad de Oruro.'
    },
    {
      title: 'Wi-Fi',
      icon: this.sanitize('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>'),
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      description: 'Wifi gratis en todo el hotel'
    },
    {
      title: 'Restaurante',
      icon: this.sanitize('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>'),
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
      items: ['Restaurante con variedad de platos típicos', 'Servicio a la habitación']
    },
    {
      title: 'Calefacción',
      icon: this.sanitize('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>'),
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
      description: 'Según requerimiento (Costo extra, consulte en el hotel)'
    },
    {
      title: 'Accesibilidad',
      icon: this.sanitize('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>'),
      image: 'https://images.unsplash.com/photo-1573167107775-6fdf81a1a72d?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Parking',
      icon: this.sanitize('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>'),
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80',
      items: ['Estacionamiento fuera del hotel', 'Estacionamiento techado']
    },
    {
      title: 'Salón de Eventos',
      icon: this.sanitize('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>'),
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      description: 'Contamos con experiencia en la atención de eventos corporativos. Nuestro equipo puede ayudarte a coordinar los detalles necesarios para que cada evento se desarrolle de manera organizada y profesional. Nuestro salón de eventos está pensado para reuniones empresariales, conferencias, capacitaciones, también contamos con servicio de catering para cada ocasión.',
      items: [
        'Capacidad hasta para 100 personas',
        'Incluye sillas, mesas (según requerimiento)',
        'Equipo de sonido, micrófono',
        'Equipo audiovisual, Ecran, Pizarra acrílica',
        'Servicio de catering'
      ]
    }
  ];
}
