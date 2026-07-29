import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}

const BASE = 'https://mariachismichoacan.cl';

const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'Mariachi Michoacán | Mariachis en Santiago de Chile ☎ +56 9 6260 6833',
    description: 'Mariachi Michoacán — el mejor grupo de mariachis en Santiago de Chile. Serenatas, bodas, cumpleaños y eventos desde $45.000. Transporte incluido. ¡Llámanos!',
    keywords: 'mariachis santiago de chile, mariachi santiago, serenata mariachi santiago, mariachi chile, grupo mariachi santiago',
    canonical: `${BASE}/`,
  },
  '/servicios': {
    title: 'Servicios de Mariachi en Santiago de Chile | Bodas, Serenatas, Cumpleaños',
    description: 'Contrata mariachi para bodas, serenatas románticas, cumpleaños y eventos corporativos en Santiago de Chile. Profesionales con más de 20 años de experiencia.',
    keywords: 'serenata mariachi santiago, mariachi para bodas santiago, mariachi cumpleaños santiago, mariachi eventos corporativos chile',
    canonical: `${BASE}/servicios`,
  },
  '/paquetes': {
    title: 'Precios Mariachi Santiago de Chile | Desde $45.000 | Mariachi Michoacán',
    description: 'Paquetes de mariachi desde $45.000 en Santiago de Chile. 3 o 4 mariachis, 5 a 12 canciones, transporte incluido. Pago en efectivo o transferencia.',
    keywords: 'precio mariachi santiago, costo mariachi chile, paquetes mariachi santiago, mariachi economico santiago chile, cuanto cuesta mariachi santiago',
    canonical: `${BASE}/paquetes`,
  },
  '/galeria': {
    title: 'Fotos y Videos | Mariachi Michoacán Santiago de Chile',
    description: 'Mira las fotos y videos de Mariachi Michoacán en acción. Serenatas, bodas y shows en Santiago de Chile. Charros mexicanos auténticos.',
    keywords: 'fotos mariachi santiago, videos mariachi chile, mariachi michoacan fotos, charros mexicanos santiago',
    canonical: `${BASE}/galeria`,
  },
  '/testimonios': {
    title: 'Opiniones y Testimonios | Mariachi Michoacán Santiago Chile',
    description: 'Lee las opiniones de nuestros clientes satisfechos en Santiago de Chile. Mariachi Michoacán, 100% recomendados para tu serenata o evento.',
    keywords: 'opiniones mariachi santiago, testimonios mariachi chile, mariachi recomendado santiago, reviews mariachi chile',
    canonical: `${BASE}/testimonios`,
  },
  '/contacto': {
    title: 'Contactar Mariachi en Santiago de Chile | Mariachi Michoacán +56 9 6260 6833',
    description: 'Contáctanos para cotizar tu serenata o evento en Santiago de Chile. Respondemos en menos de 24 horas. WhatsApp: +56 9 6260 6833.',
    keywords: 'contacto mariachi santiago, cotizar mariachi chile, whatsapp mariachi santiago, mariachi michoacan contacto',
    canonical: `${BASE}/contacto`,
  },
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  init() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const path = e.urlAfterRedirects.split('?')[0];
        const data = PAGE_META[path] ?? PAGE_META['/'];
        this.apply(data);
      });
  }

  private apply(data: PageMeta) {
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ name: 'keywords', content: data.keywords });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: data.canonical });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });

    if (isPlatformBrowser(this.platformId)) {
      let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', data.canonical);

      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'page_view',
        page_path: data.canonical.replace(BASE, ''),
        page_title: data.title,
      });
    }
  }
}
