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
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-13.jpg', titulo: 'Serenata romántica',          categoria: 'Serenatas', featured: true },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-14.jpg', titulo: 'Charro con guitarra',          categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-15.jpg', titulo: 'Serenata en jardín',           categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-01.jpg', titulo: 'Serenata especial',            categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-09.jpg', titulo: 'Momento romántico',            categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-23.jpg', titulo: 'Serenata memorable',           categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-26.jpg', titulo: 'Música en vivo',               categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-29.jpg', titulo: 'Serenata con flores',          categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-31.jpg', titulo: 'Serenata en casa',             categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-32.jpg', titulo: 'Serenata al aire libre',       categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-33.jpg', titulo: 'Serenata romántica en casa',   categoria: 'Serenatas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-34.jpg', titulo: 'Serenata sorpresa',            categoria: 'Serenatas' },
    // Bodas
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-10.jpg', titulo: 'Boda con mariachi',            categoria: 'Bodas', featured: true },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-02.jpg', titulo: 'Ceremonia especial',           categoria: 'Bodas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-19.jpg', titulo: 'Celebración de boda',          categoria: 'Bodas' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-24.jpg', titulo: 'Mariachi en boda',             categoria: 'Bodas' },
    // Cumpleaños
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-11.jpg', titulo: 'Cumpleaños con mariachi',      categoria: 'Cumpleaños', featured: true },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-20.jpg', titulo: 'Celebración de cumpleaños',    categoria: 'Cumpleaños' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-04.jpg', titulo: 'Fiesta de cumpleaños',         categoria: 'Cumpleaños' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-30.jpg', titulo: 'Mañanitas en restaurante',     categoria: 'Cumpleaños' },
    // El Grupo
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-07.jpg', titulo: 'Grupo completo',               categoria: 'El Grupo', featured: true },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-17.jpg', titulo: 'Nuestro equipo',               categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-05.jpg', titulo: 'Charros mexicanos',            categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-08.jpg', titulo: 'Trajes de charro',             categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-12.jpg', titulo: 'Mariachi Michoacán',           categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-16.jpg', titulo: 'Músicos profesionales',        categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-18.jpg', titulo: 'El grupo en acción',           categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-21.jpg', titulo: 'Presentación grupal',          categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-25.jpg', titulo: 'Traje tradicional',            categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-27.jpg', titulo: 'Mariachi Michoacán Chile',     categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-28.jpg', titulo: 'El equipo listo',              categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-35.jpg', titulo: 'Evento en restaurante',        categoria: 'El Grupo' },
    { tipo: 'foto', src: 'assets/photos/mariachi-michoacan-36.jpg', titulo: 'Al aire libre',                categoria: 'El Grupo' },
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
