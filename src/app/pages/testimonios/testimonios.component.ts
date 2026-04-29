import { Component } from '@angular/core';

interface TestimonioUI {
  nombre: string; texto: string; evento: string; estrellas: number;
}

@Component({
  selector: 'app-testimonios',
  standalone: false,
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss']
})
export class TestimoniosComponent {
  loading = false;
  stars = [1,2,3,4,5];

  testimonios: TestimonioUI[] = [
    { nombre:'Ana García', texto:'Fueron increíbles en nuestra boda. Todo el mundo quedó emocionado. ¡Gracias Mariachi Michoacán!', evento:'Boda', estrellas:5 },
    { nombre:'Carlos Méndez', texto:'La serenata para mi esposa fue perfecta. Profesionales y muy emotivos. Los recomiendo al 100%.', evento:'Serenata', estrellas:5 },
    { nombre:'Familia Rodríguez', texto:'Las mañanitas de mi mamá fueron las mejores de su vida. Lloramos de emoción. ¡Excelentes!', evento:'Cumpleaños', estrellas:5 },
    { nombre:'Laura Torres', texto:'Nuestro evento corporativo fue todo un éxito gracias a ellos. Puntualidad y calidad total.', evento:'Corporativo', estrellas:5 },
    { nombre:'Miguel Ángel S.', texto:'Primera vez que contrataba mariachi y superaron todas mis expectativas. Absolutamente recomendados.', evento:'Serenata', estrellas:5 },
    { nombre:'Sofía Hernández', texto:'Nuestra quince años fue mágica con su música. Los invitados no pararon de bailar y emocionerse.', evento:'Quinceaños', estrellas:5 },
  ];

  initials(nombre: string): string {
    return nombre.split(' ').slice(0,2).map(p => p[0]).join('').toUpperCase();
  }
}
