import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface ServiceItem {
  title: string;
  badge: string;
  icon: SafeHtml;
  image?: string;
  description: string;
  items?: string[];
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.html'
})
export class ServicesSectionComponent {
  private sanitizer = inject(DomSanitizer);

  private sanitize(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  serviceGroups: ServiceItem[] = [
    {
      title: 'Desayuno Buffet',
      badge: 'Cortesía',
      icon: this.sanitize(`
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v2m0 0a8 8 0 018 8H4a8 8 0 018-8zm-9 11h18a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1zm9-15a1 1 0 110 2 1 1 0 010-2z" />
        </svg>
      `),
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80',
      description: 'Comienza tu día con una propuesta pensada para acompañarte antes de una jornada de trabajo o de descubrir nuestra hermosa ciudad de Oruro.',
      items: ['Variedad de opciones calientes y frescas', 'Cafetería, repostería y jugos naturales']
    },
    {
      title: 'Wi-Fi',
      badge: 'Alta Velocidad',
      icon: this.sanitize(`
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      `),
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      description: 'Conectividad inalámbrica estable y veloz en todo el establecimiento para que trabajes o te mantengas en contacto sin interrupciones.',
      items: ['Wifi gratis en todo el hotel', 'Conexión de alta fidelidad 24/7']
    },
    {
      title: 'Restaurante',
      badge: 'Gastronomía',
      icon: this.sanitize(`
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v8m0-8h3.5a2.5 2.5 0 002.5-2.5V4M12 12H8.5A2.5 2.5 0 016 9.5V4m3 0v4m-3-4v4m6-4v4" />
        </svg>
      `),
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
      description: 'Una carta selecta con especialidades culinarias preparadas con ingredientes locales frescos y sazón inigualable.',
      items: ['Restaurante con variedad de platos típicos', 'Servicio a la habitación']
    },
    {
      title: 'Calefacción',
      badge: 'Confort Térmico',
      icon: this.sanitize(`
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      `),
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
      description: 'Climatización diseñada para contrarrestar las noches frías de Oruro y asegurar un descanso placentero y reparador.',
      items: ['Según requerimiento (Costo extra, consulte en el hotel)', 'Temperatura óptima garantizada']
    },
    {
      title: 'Accesibilidad',
      badge: 'Inclusivo',
      icon: this.sanitize(`
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
          <circle cx="12" cy="4.5" r="2.5" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4m0 0l3 5m-3-5l-3 5m-2-7h10" />
        </svg>
      `),
      image: 'https://images.unsplash.com/photo-1573167107775-6fdf81a1a72d?auto=format&fit=crop&w=600&q=80',
      description: 'Infraestructura y personal capacitado para garantizar una estadía cómoda, fluida y sin barreras para todos.',
      items: ['Disponible para todos los huéspedes', 'Accesos y circulaciones adaptadas']
    },
    {
      title: 'Parking',
      badge: 'Seguridad',
      icon: this.sanitize(`
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 17a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 11l2-5a2 2 0 012-1h10a2 2 0 012 1l2 5v6a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 11h14" />
        </svg>
      `),
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80',
      description: 'Zonas de aparcamiento convenientes y protegidas para la tranquilidad de quienes viajan en su propio vehículo.',
      items: ['Estacionamiento fuera del hotel', 'Estacionamiento techado']
    },
    {
      title: 'Salón de Eventos',
      badge: 'Espacio Exclusivo',
      icon: this.sanitize(`
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      `),
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
