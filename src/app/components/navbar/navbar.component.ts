import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  template: `
    <nav class="navbar" [class.navbar--scrolled]="scrolled">
      <div class="navbar__inner">

        <!-- Logo -->
        <a routerLink="/" class="navbar__brand">
          <img src="assets/logo.png" alt="Mariachi Michoacán" class="navbar__logo-img" width="180" height="48" />
        </a>

        <!-- Links centrales (desktop) -->
        <ul class="navbar__links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Inicio</a></li>
          <li><a routerLink="/servicios" routerLinkActive="active">Servicios</a></li>
          <li><a routerLink="/galeria" routerLinkActive="active">Galería</a></li>
          <li><a routerLink="/paquetes" routerLinkActive="active">Paquetes</a></li>
          <li><a routerLink="/repertorio" routerLinkActive="active">Repertorio</a></li>
          <li><a routerLink="/testimonios" routerLinkActive="active">Testimonios</a></li>
          <li><a routerLink="/contacto" routerLinkActive="active">Contacto</a></li>
        </ul>

        <!-- CTA teléfono (desktop) -->
        <div class="navbar__actions">
          <a href="tel:+56962606833" class="navbar__phone-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            +56 9 6260 6833
          </a>
        </div>

        <!-- Icono teléfono (mobile) -->
        <a href="tel:+56962606833" class="navbar__mobile-call" aria-label="Llamar">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </a>
      </div>

      <!-- Barra de navegación mobile (siempre visible) -->
      <div class="navbar__mobile-strip">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Inicio</a>
        <a routerLink="/servicios" routerLinkActive="active">Servicios</a>
        <a routerLink="/galeria" routerLinkActive="active">Galería</a>
        <a routerLink="/paquetes" routerLinkActive="active">Paquetes</a>
        <a routerLink="/repertorio" routerLinkActive="active">Repertorio</a>
        <a routerLink="/testimonios" routerLinkActive="active">Testimonios</a>
        <a routerLink="/contacto" routerLinkActive="active">Contacto</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(10, 10, 10, 0.92);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(201,150,12,0.2);
      transition: all 250ms ease;

      &--scrolled {
        background: rgba(6, 6, 6, 0.98);
        box-shadow: 0 4px 30px rgba(0,0,0,0.6);
        border-bottom-color: rgba(201,150,12,0.35);
      }
    }

    .navbar__inner {
      max-width: 1140px;
      margin-inline: auto;
      padding: 0 clamp(1rem, 4vw, 2rem);
      height: 70px;
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .navbar__brand {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .navbar__logo-img {
      height: 48px;
      width: auto;
      object-fit: contain;
      filter: drop-shadow(0 0 8px rgba(201,150,12,0.35));
      transition: filter 250ms;
    }
    .navbar__brand:hover .navbar__logo-img {
      filter: drop-shadow(0 0 16px rgba(201,150,12,0.65));
    }

    .navbar__links {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.1rem;
      list-style: none;
      margin: 0;
      padding: 0;

      a {
        display: block;
        padding: 0.4rem 0.85rem;
        color: rgba(255,255,255,0.72);
        font-family: 'Cinzel', Georgia, serif;
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        border-radius: 4px;
        transition: color 200ms;
        text-decoration: none;
        white-space: nowrap;

        &:hover { color: #C9960C; }
        &.active { color: #C9960C; }
      }
    }

    .navbar__actions {
      flex-shrink: 0;
    }

    .navbar__phone-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.5rem 1.1rem;
      border: 1.5px solid rgba(201,150,12,0.5);
      border-radius: 6px;
      color: #C9960C;
      font-family: 'Cinzel', Georgia, serif;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-decoration: none;
      transition: all 200ms;
      white-space: nowrap;

      &:hover {
        background: rgba(201,150,12,0.1);
        border-color: #C9960C;
      }
    }

    /* ===== MOBILE CALL ICON ===== */
    .navbar__mobile-call {
      display: none;
      margin-left: auto;
      flex-shrink: 0;
      width: 38px;
      height: 38px;
      align-items: center;
      justify-content: center;
      border: 1.5px solid rgba(201,150,12,0.45);
      border-radius: 50%;
      color: #C9960C;
      text-decoration: none;
      transition: all 200ms;

      &:hover {
        background: rgba(201,150,12,0.12);
        border-color: #C9960C;
      }
    }

    /* ===== MOBILE NAV STRIP ===== */
    .navbar__mobile-strip {
      display: none;
      overflow-x: auto;
      padding: 0.55rem 1rem 0.65rem;
      gap: 0.45rem;
      border-top: 1px solid rgba(201,150,12,0.12);
      scrollbar-width: none;

      &::-webkit-scrollbar { display: none; }

      a {
        flex-shrink: 0;
        padding: 0.38rem 0.9rem;
        border: 1px solid rgba(255,255,255,0.13);
        border-radius: 20px;
        background: rgba(255,255,255,0.04);
        color: rgba(255,255,255,0.68);
        font-family: 'Cinzel', Georgia, serif;
        font-size: 0.67rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-decoration: none;
        white-space: nowrap;
        transition: all 200ms;

        &:hover {
          border-color: rgba(201,150,12,0.5);
          color: #C9960C;
          background: rgba(201,150,12,0.08);
        }

        &.active {
          border-color: #C9960C;
          color: #C9960C;
          background: rgba(201,150,12,0.1);
        }
      }
    }

    @media (max-width: 860px) {
      .navbar__links        { display: none; }
      .navbar__actions      { display: none; }
      .navbar__mobile-call  { display: flex; position: absolute; right: 1rem; margin-left: 0; }
      .navbar__mobile-strip { display: flex; }
      .navbar__inner        { justify-content: center; position: relative; }
    }
  `]
})
export class NavbarComponent {
  scrolled = false;

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 20; }
}
