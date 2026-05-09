import { Component } from '@angular/core';

@Component({
  selector: 'app-paquetes',
  standalone: false,
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.scss']
})
export class PaquetesComponent {
  planes = [
    {
      nombre: 'Opción 2', precio: '$50.000', duracion: '3 Mariachis · 8 canciones', featured: false,
      features: ['3 Mariachis Mexicanos 🇲🇽','Voces masculinas 🎤','8 Canciones','Repertorio Alegre y Romántico','Transporte Incluido 🚗','Amplificación Digital Profesional 🔊','Charros Mexicanos','Fotos con Sombrero mexicano 📸']
    },
    {
      nombre: 'Opción 3', precio: '$60.000', duracion: '4 Mariachis · 10 canciones', featured: false,
      features: ['4 Mariachis Mexicanos (Grupo más Completo)','Voces Masculinas 🎤','10 Canciones','Repertorio Alegre y Romántico','Transporte Incluido 🚗','Amplificación Digital Profesional 🔊','Charros Mexicanos','Fotos con Sombrero mexicano 📸']
    },
    {
      nombre: 'Opción 4', precio: '$70.000', duracion: '4 Mariachis · 12 canciones', featured: true,
      features: ['4 Mariachis Mexicanos (Grupo más Completo)','Voces Femenina y Masculina 🎤','12 Canciones','Repertorio Alegre, Romántico y Emotivo','Transporte Incluido 🚗','Amplificación Digital Profesional 🔊','Charros Mexicanos','Fotos con Sombrero mexicano 📸']
    }
  ];
}
