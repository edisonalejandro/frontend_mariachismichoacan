import { Component } from '@angular/core';

interface GaleriaItem {
  tipo: 'foto';
  src: string;
  titulo: string;
  categoria: string;
  featured?: boolean;
}

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  categorias = ['Todos', 'Serenatas', 'Bodas', 'Cumpleaños', 'El Grupo'];
  categoriaActiva = 'Todos';
  lightboxSrc: string | null = null;

  fotos: GaleriaItem[] = [
    // Serenatas
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-13.webp', titulo: 'Serenata romántica',          categoria: 'Serenatas', featured: true },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-14.webp', titulo: 'Charro con guitarra',          categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-15.webp', titulo: 'Serenata en jardín',           categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-01.webp', titulo: 'Serenata especial',            categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-09.webp', titulo: 'Momento romántico',            categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-23.webp', titulo: 'Serenata memorable',           categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-26.webp', titulo: 'Música en vivo',               categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-29.webp', titulo: 'Serenata con flores',          categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-31.webp', titulo: 'Serenata en casa',             categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-32.webp', titulo: 'Serenata al aire libre',       categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-33.webp', titulo: 'Serenata romántica en casa',   categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-34.webp', titulo: 'Serenata sorpresa',            categoria: 'Serenatas' },
    // Bodas
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-10.webp', titulo: 'Boda con mariachi',            categoria: 'Bodas', featured: true },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-02.webp', titulo: 'Ceremonia especial',           categoria: 'Bodas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-19.webp', titulo: 'Celebración de boda',          categoria: 'Bodas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-24.webp', titulo: 'Mariachi en boda',             categoria: 'Bodas' },
    // Cumpleaños
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-11.webp', titulo: 'Cumpleaños con mariachi',      categoria: 'Cumpleaños', featured: true },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-20.webp', titulo: 'Celebración de cumpleaños',    categoria: 'Cumpleaños' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-04.webp', titulo: 'Fiesta de cumpleaños',         categoria: 'Cumpleaños' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-30.webp', titulo: 'Mañanitas en restaurante',     categoria: 'Cumpleaños' },
    // El Grupo
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-07.webp', titulo: 'Grupo completo',               categoria: 'El Grupo', featured: true },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-17.webp', titulo: 'Nuestro equipo',               categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-05.webp', titulo: 'Charros mexicanos',            categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-08.webp', titulo: 'Trajes de charro',             categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-12.webp', titulo: 'Mariachi Michoacán',           categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-16.webp', titulo: 'Músicos profesionales',        categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-18.webp', titulo: 'El grupo en acción',           categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-21.webp', titulo: 'Presentación grupal',          categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-25.webp', titulo: 'Traje tradicional',            categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-27.webp', titulo: 'Mariachi Michoacán Chile',     categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-28.webp', titulo: 'El equipo listo',              categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-35.webp', titulo: 'Evento en restaurante',        categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-36.webp', titulo: 'Al aire libre',                categoria: 'El Grupo' },
  ];

  get filtrados() {
    return this.categoriaActiva === 'Todos'
      ? this.fotos
      : this.fotos.filter(f => f.categoria === this.categoriaActiva);
  }

  setCategoria(c: string) { this.categoriaActiva = c; }

  openLightbox(src: string) { this.lightboxSrc = src; }
  closeLightbox() { this.lightboxSrc = null; }
}
