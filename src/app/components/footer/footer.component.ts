import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  template: `
<footer class="footer">
  <div class="footer__container">
    <div class="footer__brand">
      <div class="footer__logo">🇲🇽 Mariachi Michoacán 🇲🇽</div>
      <p>El sonido auténtico del mariachi mexicano para tus momentos más especiales.</p>
      <div class="footer__social">
        <a href="https://www.instagram.com/mariachi_michoacan_chile/" target="_blank" rel="noopener" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="https://www.youtube.com/@mariachimichoac%C3%A1ncl" target="_blank" rel="noopener" aria-label="YouTube">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
        <a href="https://wa.me/56962606833" target="_blank" rel="noopener" aria-label="WhatsApp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        </a>
      </div>
    </div>

    <div class="footer__col">
      <h4>Navegación</h4>
      <a routerLink="/">Inicio</a>
      <a routerLink="/servicios">Servicios</a>
      <a routerLink="/paquetes">Paquetes</a>
      <a routerLink="/galeria">Galería</a>
      <a routerLink="/testimonios">Testimonios</a>
      <a routerLink="/contacto">Contacto</a>
    </div>

    <div class="footer__col">
      <h4>Contacto</h4>
      <span>📞 +56 9 6260 6833</span>
      <span>✉️ mariachimichoacan.cl&#64;gmail.com</span>
      <span>📍 Santiago de Chile</span>
    </div>
  </div>

  <div class="footer__bottom">
    <p>© {{ year }} Mariachi Michoacán. Todos los derechos reservados.</p>
    <p class="footer__flowbit-line">
      Diseñado y desarrollado por
      <a href="https://www.flowbit.cl/" target="_blank" rel="noopener" class="footer__flowbit">
        <img src="assets/favicon_flowbit.ico" alt="Flowbit" class="footer__flowbit-icon" />
        Flowbit
      </a>
      &nbsp;·&nbsp;
      <a href="https://www.instagram.com/flowbit.cl/" target="_blank" rel="noopener" class="footer__flowbit">&#64;flowbit.cl</a>
    </p>
  </div>
</footer>
  `,
  styles: [`
.footer {
  background: #0D0D1A;
  color: rgba(255,255,255,0.65);
  padding-top: 4rem;
  font-size: 0.9rem;
}
.footer__container {
  max-width: 1200px; margin: 0 auto; padding: 0 2rem 3rem;
  display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem;
}
.footer__logo { font-family: 'Playfair Display',serif; font-size: 1.4rem; color: #C9960C; font-weight: 700; margin-bottom: 1rem; }
.footer__brand p { line-height: 1.7; margin-bottom: 1.5rem; }
.footer__social { display: flex; gap: 0.5rem;
  a {
    width: 36px; height: 36px;
    border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.65); text-decoration: none; font-size: 0.75rem; font-weight: 700;
    transition: all 200ms;
    &:hover { border-color: #C9960C; color: #C9960C; }
  }
}
.footer__col {
  display: flex; flex-direction: column; gap: 0.6rem;
  h4 { color: #fff; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; }
  a { color: rgba(255,255,255,0.65); text-decoration: none; transition: color 200ms; &:hover { color: #C9960C; } }
  span { color: rgba(255,255,255,0.65); }
}
.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 1.5rem 2rem;
  max-width: 1200px; margin: 0 auto;
  display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap;
  font-size: 0.82rem; color: rgba(255,255,255,0.35);
}
.footer__flowbit {
  color: #C9960C;
  text-decoration: none;
  font-weight: 600;
  transition: color 200ms;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  vertical-align: middle;
  &:hover { color: #F5C842; }
}
.footer__flowbit-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
  border-radius: 3px;
  vertical-align: middle;
}
.footer__flowbit-line {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.2rem;
  justify-content: center;
}
@media (max-width: 768px) {
  .footer__container { grid-template-columns: 1fr; gap: 2rem; }
  .footer__bottom {
    flex-direction: column;
    text-align: center;
    padding-bottom: calc(1.5rem + 80px + env(safe-area-inset-bottom));
  }
}
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
