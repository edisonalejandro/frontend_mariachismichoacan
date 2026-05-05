import { Component } from '@angular/core';

interface Motivo {
  icono: string;
  titulo: string;
  subtitulo: string;
  canciones: string[];
  tono: 'gold' | 'crimson' | 'dark';
}

@Component({
  selector: 'app-repertorio',
  standalone: false,
  templateUrl: './repertorio.component.html',
  styleUrls: ['./repertorio.component.scss']
})
export class RepertorioComponent {

  motivoActivo: number | null = null;

  motivos: Motivo[] = [
    {
      icono: '💐',
      titulo: 'Para Mamá',
      subtitulo: 'Celebra a la persona más especial',
      tono: 'gold',
      canciones: [
        'Las mañanitas', 'Felicidades', 'En tu día', 'El regalo de un hijo',
        'Canto a la madre', 'El día más hermoso', 'Amor eterno', 'Señora señora',
        'A la sombra de mi mamá', 'Toda una vida', 'Ni por mil puñados de oro',
        'Por el amor a mi madre', 'Hermoso cariño', 'La mejor de todas',
        'Canta, canta', 'La calandria', 'Ay! Chavela', 'Ojitos verdes',
        'Mamá', 'Cielito lindo', 'Happy birthday',
      ]
    },
    {
      icono: '🤠',
      titulo: 'Para Papá',
      subtitulo: 'Homenaje al hombre de la casa',
      tono: 'dark',
      canciones: [
        'Las mañanitas', 'Felicidades', 'En tu día', 'El rey', 'Amigo',
        'Mi viejo', 'Cuando quería ser grande', 'Juan charrasqueado',
        'El rancho grande', 'Adolorido', 'Mátalas', 'Popurrí ranchero',
        'Me sacaron del tenampa', 'Yo! El aventurero',
        'Set de cumbias: Yo no fui, Mariachi loco, Bomba',
        'Cumpleaños feliz', 'El hombre que más te amó', 'El hijo desobediente',
      ]
    },
    {
      icono: '👑',
      titulo: 'Para Quinceañera',
      subtitulo: 'Su noche más especial',
      tono: 'gold',
      canciones: [
        'Las mañanitas', 'Felicidades', 'En tu día', 'Mi niña bonita',
        'No crezcas más', 'Hermoso cariño', 'Yo te esperaba', '15 primaveras',
        'Gema', 'Popurrí corridos', 'Mujeres divinas', 'Cumbias mexicanas',
        'Cielito lindo', 'Cumpleaños feliz',
      ]
    },
    {
      icono: '🌹',
      titulo: 'Serenatas de Amor',
      subtitulo: 'Romance y emoción en cada canción',
      tono: 'crimson',
      canciones: [
        'Las mañanitas', 'Felicidades', 'En tu día', 'Toda una vida',
        'Te amaré toda la vida', 'La mejor de todas', 'Si nos dejan',
        'Hermoso cariño', 'Cuando sale la luna', 'Amorcito corazón',
        'Cien años', 'Estos celos', 'Para siempre', 'Mujeres divinas',
        'Qué bonito amor', 'Serenata huasteca', 'La venia bendita',
        'Viva quien sabe querer', 'Chavela', 'El rancho grande',
        'Es la mujer', 'Mátalas', 'Alta y delgadita', 'Happy birthday',
      ]
    },
    {
      icono: '🎺',
      titulo: 'Corridos y Cumbias',
      subtitulo: 'Para bailar y disfrutar',
      tono: 'dark',
      canciones: [
        'Chavela', 'El rancho grande', 'La calandria', 'Viva quien sabe querer',
        'Que digan misa', 'Es la mujer', 'Alta y delgada', 'Adolorido',
        'Mátalas', 'Felicidades', 'En tu día', 'La ley del monte', 'Jalisco',
        'Hermoso cariño', 'Alta y delgadita', 'Ojitos verdes', 'Me gustas mucho',
        'Canta canta', 'Copitas de mezcal', 'La tequilera', 'El sube y baja',
        'Para siempre', 'La venia bendita', 'Yo no fui', 'Amor de mis amores',
        'Me encantas', 'Mariachi loco', 'Bomba', 'Happy birthday',
      ]
    },
    {
      icono: '🕊️',
      titulo: 'Para Papá Difunto',
      subtitulo: 'Honrando su memoria con música',
      tono: 'dark',
      canciones: [
        'Amor eterno', 'El rey', 'Amigo', 'Como quien pierde una estrella',
        'Cuando quería ser grande', 'Mi querido viejo', 'Juan charrasqueado',
        'Te lo pido por favor', 'Y volveré', 'Nadie es eterno en el mundo',
        'Granito de mostaza', 'Un puño de tierra', 'El hijo desobediente',
        'El hombre que más te amó',
      ]
    },
    {
      icono: '🌸',
      titulo: 'Para Mamá Difunta',
      subtitulo: 'Un abrazo musical para su recuerdo',
      tono: 'crimson',
      canciones: [
        'Amor eterno', 'Toda una vida', 'Canto a la madre', 'El día más hermoso',
        'Te lo pido por favor', 'Recuérdame', 'Como quien pierde una estrella',
        'Ni por mil puñados de oro', 'Mamá', 'Si no te hubieras ido',
        'Un puño de tierra', 'Nadie es eterno', 'Y volveré',
        'Señora señora', 'Granito de mostaza',
      ]
    },
    {
      icono: '✝️',
      titulo: 'Repertorio Cristiano',
      subtitulo: 'Fe y devoción en cada nota',
      tono: 'gold',
      canciones: [
        'Jesús es mi pastor', 'Granito de mostaza', 'Mi amigo Jesús',
        'Peldaños', 'Yo vine a alabar a Dios', 'Todo poderoso', 'Un día a la vez',
      ]
    },
  ];

  toggle(index: number) {
    this.motivoActivo = this.motivoActivo === index ? null : index;
  }
}
