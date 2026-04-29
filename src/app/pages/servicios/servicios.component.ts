import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: false,
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {
  servicios = [
    {
      icon: '💍', nombre: 'Bodas',
      desc: 'Tu boda merece la mejor música. Mariachi Michoacán crea el ambiente perfecto en cada momento del día.',
      features: ['Serenata a la entrada','Ceremonia religiosa o civil','Vals y recepción','Repertorio personalizado para la pareja'],
      color: '#C9960C'
    },
    {
      icon: '🌹', nombre: 'Serenatas',
      desc: 'Sorprende a quien amas con una serenata romántica e irrepetible. El regalo más emotivo.',
      features: ['Nocturnas o al amanecer','Romántica o festiva','En casa, jardín o sorpresa','Coordinación discreta y puntual'],
      color: '#E85D75'
    },
    {
      icon: '🎂', nombre: 'Cumpleaños',
      desc: 'Las mañanitas más emocionantes y mucho más para hacer la celebración inolvidable.',
      features: ['Las mañanitas en vivo','Música durante toda la fiesta','Grupos desde 5 músicos','Personalización del repertorio'],
      color: '#6366F1'
    },
    {
      icon: '🏢', nombre: 'Corporativos',
      desc: 'Añade un toque cultural y festivo a tus eventos de empresa con la autenticidad del mariachi.',
      features: ['Cenas de gala y premiaciones','Inauguraciones y aniversarios','Fiestas patrias','Presentaciones institucionales'],
      color: '#10B981'
    },
  ];
}
