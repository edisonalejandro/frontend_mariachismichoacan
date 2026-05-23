import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroPhoto = 'assets/photos/mariachi-michoacan-00.png';

  testimonials = [
    { nombre: 'Ana García',        comentario: 'Fueron increíbles en nuestra boda. Todo el mundo quedó emocionado. ¡Gracias Mariachi Michoacán!', rating: 5 },
    { nombre: 'Carlos Méndez',     comentario: 'La serenata para mi esposa fue perfecta. Profesionales y muy emotivos. Los recomiendo al 100%.', rating: 5 },
    { nombre: 'Familia Rodríguez', comentario: 'Las mañanitas de mi mamá fueron las mejores de su vida. Lloramos de emoción. ¡Excelentes!',       rating: 5 },
  ];

  serviciosHome = [
    {
      icon: '🎤',
      nombre: 'Serenatas Románticas',
      desc: 'Sorprende a esa persona especial con una serenata inolvidable. Romance y tradición en cada canción.'
    },
    {
      icon: '🎉',
      nombre: 'Eventos y Celebraciones',
      desc: 'Bodas, cumpleaños, aniversarios y toda ocasión especial. Hacemos tu evento único e irrepetible.'
    },
    {
      icon: '💼',
      nombre: 'Eventos Corporativos',
      desc: 'Profesionalismo y elegancia para eventos empresariales y reuniones importantes en Santiago.'
    },
  ];

  paquetes = [
    {
      icono: '🎸',
      nombre: 'Serenata Básica',
      duracion: '30 Minutos',
      precio: '$45.000',
      features: ['3 músicos', 'Hasta 5 canciones', 'Ideal para sorpresas'],
      popular: false,
    },
    {
      icono: '🎺',
      nombre: 'Evento Estándar',
      duracion: '1 Hora',
      precio: '$60.000',
      features: ['4 músicos', 'Hasta 10 canciones', 'Sonido profesional'],
      popular: false,
    },
    {
      icono: '🎻',
      nombre: 'Evento Premium',
      duracion: '1 Hora +',
      precio: '$70.000',
      features: ['4 músicos', 'Voz femenina', 'Hasta 12 canciones'],
      popular: true,
    },
  ];

  galeriaFotos = [
    'assets/photos/mariachi-michoacan-01-sm.webp',
    'assets/photos/mariachi-michoacan-02-sm.webp',
    'assets/photos/mariachi-michoacan-04-sm.webp',
    'assets/photos/mariachi-michoacan-05-sm.webp',
    'assets/photos/mariachi-michoacan-07-sm.webp',
    'assets/photos/mariachi-michoacan-08-sm.webp',
    'assets/photos/mariachi-michoacan-09-sm.webp',
    'assets/photos/mariachi-michoacan-10-sm.webp',
    'assets/photos/mariachi-michoacan-11-sm.webp',
    'assets/photos/mariachi-michoacan-12-sm.webp',
    'assets/photos/mariachi-michoacan-13-sm.webp',
    'assets/photos/mariachi-michoacan-14-sm.webp',
    'assets/photos/mariachi-michoacan-15-sm.webp',
    'assets/photos/mariachi-michoacan-16-sm.webp',
    'assets/photos/mariachi-michoacan-17-sm.webp',
    'assets/photos/mariachi-michoacan-18-sm.webp',
    'assets/photos/mariachi-michoacan-19-sm.webp',
    'assets/photos/mariachi-michoacan-20-sm.webp',
    'assets/photos/mariachi-michoacan-21-sm.webp',
    'assets/photos/mariachi-michoacan-23-sm.webp',
    'assets/photos/mariachi-michoacan-24-sm.webp',
    'assets/photos/mariachi-michoacan-25-sm.webp',
    'assets/photos/mariachi-michoacan-26-sm.webp',
    'assets/photos/mariachi-michoacan-27-sm.webp',
    'assets/photos/mariachi-michoacan-28-sm.webp',
    'assets/photos/mariachi-michoacan-29-sm.webp',
    'assets/photos/mariachi-michoacan-30-sm.webp',
    'assets/photos/mariachi-michoacan-31-sm.webp',
    'assets/photos/mariachi-michoacan-32-sm.webp',
    'assets/photos/mariachi-michoacan-33-sm.webp',
    'assets/photos/mariachi-michoacan-34-sm.webp',
    'assets/photos/mariachi-michoacan-35-sm.webp',
    'assets/photos/mariachi-michoacan-36-sm.webp',
  ];

  razones = [
    'Mariachis profesionales con más de 20 años de experiencia',
    'Repertorio de +100 canciones personalizable',
    'Puntualidad y compromiso garantizados en Santiago',
    'Amplificación Digital Profesional incluida',
    'Trajes de charro tradicionales auténticos',
    'Transporte propio incluido en toda la Región Metropolitana',
  ];

  faqs = [
    {
      q: '¿Cuánto cuesta contratar un mariachi en Santiago de Chile?',
      a: 'Nuestros paquetes parten desde $45.000 para 3 mariachis con 5 canciones, hasta $70.000 para 4 mariachis con 12 canciones. El transporte siempre está incluido.'
    },
    {
      q: '¿En qué sectores de Santiago realizan serenatas?',
      a: 'Realizamos serenatas y shows en toda la Región Metropolitana de Santiago de Chile, incluyendo comunas como Providencia, Las Condes, Ñuñoa, La Florida, Maipú, Pudahuel, entre otras.'
    },
    {
      q: '¿Con cuánta anticipación debo contratar el mariachi?',
      a: 'Recomendamos contactarnos con al menos 24 horas de anticipación, aunque hacemos lo posible por atender solicitudes de último momento. Para fechas especiales como San Valentín o fiestas patrias, reserva con más tiempo.'
    },
    {
      q: '¿Cómo se realiza el pago?',
      a: 'El pago se realiza en efectivo o transferencia bancaria en el momento de la serenata. No cobramos por adelantado.'
    },
    {
      q: '¿Qué incluye el servicio de mariachi?',
      a: 'Cada presentación incluye amplificación digital profesional, transporte propio, fotos con sombrero mexicano, charros mexicanos con traje auténtico y 20-25 minutos de show.'
    },
    {
      q: '¿Pueden tocar canciones específicas que yo elija?',
      a: 'Sí, contamos con un repertorio de más de 100 canciones entre música alegre, romántica y emotiva. Puedes enviarnos tu lista de canciones favoritas al momento de la reserva.'
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.injectFaqSchema();
    }
  }

  ngOnInit() {}

  stars(rating: number): string[] {
    return Array(5).fill('');
  }

  private injectFaqSchema() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
