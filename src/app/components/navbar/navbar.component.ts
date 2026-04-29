import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  template: `
    <nav class="navbar" [class.navbar--scrolled]="scrolled">
      <div class="navbar__inner">

        <!-- Links izquierda -->
        <ul class="navbar__links navbar__links--left" [class.navbar__links--open]="menuOpen">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="close()">Inicio</a></li>
          <li><a routerLink="/servicios" routerLinkActive="active" (click)="close()">Servicios</a></li>
          <li><a routerLink="/paquetes" routerLinkActive="active" (click)="close()">Paquetes</a></li>
        </ul>

        <!-- Logo centrado -->
        <a routerLink="/" class="navbar__brand" (click)="close()">
          <img src="assets/logo.png" alt="Mariachi Michoacán" class="navbar__logo-img" />
        </a>

        <!-- Links derecha -->
        <ul class="navbar__links navbar__links--right" [class.navbar__links--open]="menuOpen">
          <li><a routerLink="/galeria" routerLinkActive="active" (click)="close()">Galería</a></li>
          <li><a routerLink="/testimonios" routerLinkActive="active" (click)="close()">Testimonios</a></li>
          <li class="navbar__cta-item">
            <a routerLink="/contacto" class="btn btn--gold btn--navbar" (click)="close()">Cotizar ahora</a>
          </li>
        </ul>

        <!-- Burger mobile -->
        <button class="navbar__burger" (click)="toggle()" [class.navbar__burger--open]="menuOpen" aria-label="Menú">
          <span></span><span></span><span></span>
        </button>
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

    .navbar__burger {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 36px;
      height: 36px;
      padding: 4px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 6px;
      cursor: pointer;
      grid-column: 3;
      justify-self: end;

      span {
        display: block;
        width: 18px;
        height: 2px;
        background: #fff;
        border-radius: 2px;
        transition: all 250ms ease;
      }

      &--open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      &--open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
      &--open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    }

    @media (max-width: 860px) {
      .navbar__inner { grid-template-columns: 1fr auto auto; }
      .navbar__burger { display: flex; }

      .navbar__links {
        display: none;
        flex-direction: column;
        align-items: flex-start;
        position: fixed;
        top: 72px;
        left: 0; right: 0;
        background: rgba(3,8,22,0.98);
        backdrop-filter: blur(20px);
        padding: 1.5rem;
        gap: 0.25rem;
        border-top: 1px solid rgba(201,150,12,0.2);
        box-shadow: 0 20px 40px rgba(0,0,0,0.5);

        &--open { display: flex; }
        &--left, &--right { grid-column: unset; justify-content: flex-start; }

        a { font-size: 1rem; padding: 0.6rem 0.85rem; width: 100%; }
      }

      .navbar__cta-item { width: 100%; margin-left: 0; margin-top: 0.5rem;
        a { width: 100%; text-align: center; justify-content: center; display: block; }
      }
    }
  `]
})
export class NavbarComponent {
  menuOpen = false;
  scrolled = false;

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 20; }

  toggle() { this.menuOpen = !this.menuOpen; }
  close() { this.menuOpen = false; }
}
