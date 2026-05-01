import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  template: `
    <nav class="navbar" [class.navbar--scrolled]="scrolled">
      <div class="navbar__inner">

        <!-- Links izquierda -->
        <ul class="navbar__links navbar__links--left">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Inicio</a></li>
          <li><a routerLink="/servicios" routerLinkActive="active">Servicios</a></li>
          <li><a routerLink="/paquetes" routerLinkActive="active">Paquetes</a></li>
        </ul>

        <!-- Logo centrado -->
        <a routerLink="/" class="navbar__brand">
          <img src="assets/logo.png" alt="Mariachi Michoacán" class="navbar__logo-img" />
        </a>

        <!-- Links derecha -->
        <ul class="navbar__links navbar__links--right">
          <li><a routerLink="/galeria" routerLinkActive="active">Galería</a></li>
          <li><a routerLink="/testimonios" routerLinkActive="active">Testimonios</a></li>
          <li class="navbar__cta-item">
            <a routerLink="/contacto" class="btn btn--gold btn--navbar">Cotizar ahora</a>
          </li>
        </ul>
      </div>

      <!-- Barra de navegación móvil siempre visible -->
      <div class="navbar__mobile-bar">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" class="navbar__mobile-btn">Inicio</a>
        <a routerLink="/servicios" routerLinkActive="active" class="navbar__mobile-btn">Servicios</a>
        <a routerLink="/paquetes" routerLinkActive="active" class="navbar__mobile-btn">Paquetes</a>
        <a routerLink="/galeria" routerLinkActive="active" class="navbar__mobile-btn">Galería</a>
        <a routerLink="/testimonios" routerLinkActive="active" class="navbar__mobile-btn">Testimonios</a>
        <a routerLink="/contacto" routerLinkActive="active" class="navbar__mobile-btn navbar__mobile-btn--cta">Cotizar</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(5, 13, 31, 0.88);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-bottom: 1px solid rgba(201,150,12,0.2);
      transition: all 250ms ease;

      &--scrolled {
        background: rgba(3, 8, 22, 0.97);
        box-shadow: 0 4px 30px rgba(0,0,0,0.5);
        border-bottom-color: rgba(201,150,12,0.35);
      }
    }

    .navbar__inner {
      max-width: 1200px;
      margin-inline: auto;
      padding: 0 clamp(1rem,4vw,2rem);
      height: 72px;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 1rem;
    }

    .navbar__brand {
      grid-column: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }

    .navbar__logo-img {
      height: 52px;
      width: auto;
      object-fit: contain;
      filter: drop-shadow(0 0 8px rgba(201,150,12,0.4));
      transition: filter 250ms;
    }
    .navbar__brand:hover .navbar__logo-img {
      filter: drop-shadow(0 0 14px rgba(201,150,12,0.7));
    }

    .navbar__links {
      display: flex;
      align-items: center;
      gap: 0.15rem;
      list-style: none;
      margin: 0;
      padding: 0;

      a {
        display: block;
        padding: 0.4rem 0.8rem;
        color: rgba(255,255,255,0.75);
        font-size: 0.88rem;
        font-weight: 500;
        border-radius: 6px;
        transition: color 200ms, background 200ms;
        text-decoration: none;
        white-space: nowrap;
        letter-spacing: 0.02em;

        &:hover { color: #C9960C; }
        &.active { color: #C9960C; }
      }

      &--left { grid-column: 1; justify-content: flex-end; }
      &--right { grid-column: 3; justify-content: flex-start; }
    }

    .navbar__cta-item { margin-left: 0.5rem; }

    .btn--gold {
      background: linear-gradient(135deg, #C9960C, #A67A0A);
      color: #fff !important;
      padding: 0.5rem 1.1rem;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.03em;
      box-shadow: 0 2px 12px rgba(201,150,12,0.35);
      transition: box-shadow 250ms, transform 200ms !important;

      &:hover {
        box-shadow: 0 4px 20px rgba(201,150,12,0.55) !important;
        transform: translateY(-1px);
        background: linear-gradient(135deg, #D4A012, #C9960C) !important;
        color: #fff !important;
      }
    }

    .navbar__mobile-bar { display: none; }

    @media (max-width: 860px) {
      .navbar__inner { grid-template-columns: 1fr; justify-items: center; height: 56px; }
      .navbar__links { display: none; }

      .navbar__mobile-bar {
        display: flex;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        gap: 0.4rem;
        padding: 0.5rem 0.75rem;
        border-top: 1px solid rgba(201,150,12,0.2);
        background: rgba(3,8,22,0.97);

        &::-webkit-scrollbar { display: none; }
      }

      .navbar__mobile-btn {
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.55rem 1rem;
        font-size: 0.95rem;
        font-weight: 600;
        color: rgba(255,255,255,0.82);
        background: rgba(255,255,255,0.07);
        border: 1px solid rgba(255,255,255,0.14);
        border-radius: 50px;
        text-decoration: none;
        white-space: nowrap;
        transition: background 200ms, color 200ms, border-color 200ms;

        &:hover, &.active {
          background: rgba(201,150,12,0.18);
          color: #C9960C;
          border-color: rgba(201,150,12,0.5);
        }

        &--cta {
          background: linear-gradient(135deg, #C9960C, #A67A0A);
          color: #fff;
          border-color: transparent;
          font-weight: 700;

          &:hover, &.active {
            background: linear-gradient(135deg, #D4A012, #C9960C);
            color: #fff;
            border-color: transparent;
          }
        }
      }
    }
  `]
})
export class NavbarComponent {
  scrolled = false;

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 20; }
}
