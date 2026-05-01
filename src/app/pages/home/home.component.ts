import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  testimonials = [
    { nombre: 'Ana García',      comentario: 'Fueron increíbles en nuestra boda. Todo el mundo quedó emocionado. ¡Gracias Mariachi Michoacán!', rating: 5 },
    { nombre: 'Carlos Méndez',   comentario: 'La serenata para mi esposa fue perfecta. Profesionales y muy emotivos. Los recomiendo al 100%.', rating: 5 },
    { nombre: 'Familia Rodríguez', comentario: 'Las mañanitas de mi mamá fueron las mejores de su vida. Lloramos de emoción. ¡Excelentes!',  rating: 5 },
  ];

  private readonly heroPhotos = [
    'assets/photos/mariachi-michoacan-13.jpg',
    'assets/photos/mariachi-michoacan-14.jpg',
    'assets/photos/mariachi-michoacan-27.jpg',
  ];
  heroPhoto = this.heroPhotos[Math.floor(Math.random() * this.heroPhotos.length)];

  stats = [
    { num: '+20', label: 'años de experiencia' },
    { num: '500+', label: 'eventos realizados' },
    { num: '5★', label: 'calificación promedio' },
  ];

  servicios = [
    { icon: '💍', nombre: 'Bodas', desc: 'Tu boda merece la mejor música. Creamos el ambiente perfecto para tu gran día en Santiago.' },
    { icon: '🌹', nombre: 'Serenatas', desc: 'Sorprende a quien amas con una serenata romántica de mariachi en Santiago de Chile.' },
    { icon: '🎂', nombre: 'Cumpleaños', desc: 'Las mañanitas y mucho más para hacer la celebración memorable en toda la RM.' },
    { icon: '🏢', nombre: 'Corporativos', desc: 'Toque cultural y festivo para tus eventos empresariales en Santiago.' },
  ];

  razones = [
    'Mariachis profesionales con más de 20 años de experiencia',
    'Repertorio de +100 canciones personalizable',
    'Puntualidad y compromiso garantizados en Santiago',
    'Amplificación Digital Profesional incluida',
    'Trajes de charro tradicionales auténticos',
    'Transporte propio incluido en toda la Región Metropolitana',
  ];

  pasos = [
    {
      photo: 'assets/photos/mariachi-michoacan-01.jpg',
      titulo: 'Contáctanos',
      desc: 'Escríbenos por WhatsApp o llámanos. Cuéntanos la fecha, hora y dirección. Te respondemos en minutos.'
    },
    {
      photo: 'assets/photos/mariachi-michoacan-07.jpg',
      titulo: 'Confirmamos tu reserva',
      desc: 'Te confirmamos disponibilidad al instante. Sin pago anticipado — solo acordamos los detalles de tu evento.'
    },
    {
      photo: 'assets/photos/mariachi-michoacan-14.jpg',
      titulo: '¡Disfrutamos juntos!',
      desc: 'Llegamos puntuales con nuestro equipo completo. El pago es en efectivo o transferencia al momento de la serenata.'
    },
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

  constructor() {
    this.injectFaqSchema();
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
