import { Component } from '@angular/core';

declare function gtag(...args: any[]): void;

@Component({
  selector: 'app-whatsapp-button',
  standalone: false,
  template: `
<a class="wa-btn" href="https://wa.me/56962606833?text=Hola!%20Me%20interesa%20contratar%20sus%20servicios"
   target="_blank" rel="noopener" aria-label="Contactar por WhatsApp"
   (click)="trackWhatsApp()">
  <span class="wa-btn__tooltip">¡Contáctanos ahora!</span>
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
</a>
  `,
  styles: [`
.wa-btn {
  position: fixed;
  bottom: 2rem; right: 2rem;
  width: 58px; height: 58px;
  background: #25D366;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #fff; text-decoration: none;
  box-shadow: 0 4px 20px rgba(37,211,102,0.4);
  z-index: 9999;
  transition: box-shadow 250ms;

  /* Anillo de pulso: anima transform + opacity (compositor), no box-shadow */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(37,211,102,0.35);
    z-index: -1;
    opacity: 0;
    pointer-events: none;
    /* Nombre fuera del @media para que Angular lo encapsule; duración solo con no-preference */
    animation: wa-pulse 0s ease-out infinite;
  }

  &:hover,
  &:focus-visible {
    box-shadow: 0 8px 30px rgba(37,211,102,0.55);
  }

  &:focus-visible {
    outline: 3px solid #0D0D1A;
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 250ms, box-shadow 250ms;

    &::before { animation-duration: 2.5s; }

    &:hover,
    &:focus-visible { transform: scale(1.12); }

    &:hover::before,
    &:focus-visible::before { animation: none; }
  }
}
.wa-btn__tooltip {
  position: absolute; right: 68px;
  background: #0D0D1A; color: #fff;
  padding: 0.4rem 0.9rem; border-radius: 8px;
  font-size: 0.8rem; white-space: nowrap;
  opacity: 0;
  transition: opacity 200ms; pointer-events: none;
  &::after {
    content: ''; position: absolute;
    top: 50%; right: -6px; transform: translateY(-50%);
    border: 6px solid transparent; border-left-color: #0D0D1A;
  }

  @media (prefers-reduced-motion: no-preference) {
    transform: translateX(8px);
    transition: opacity 200ms, transform 200ms;
  }
}
.wa-btn:hover .wa-btn__tooltip,
.wa-btn:focus-visible .wa-btn__tooltip { opacity: 1; transform: translateX(0); }
@keyframes wa-pulse {
  0%      { transform: scale(1);    opacity: 0.7; }
  70%, 100% { transform: scale(1.35); opacity: 0; }
}
  `]
})
export class WhatsappButtonComponent {
  trackWhatsApp() {
    gtag('event', 'whatsapp_click', { event_category: 'contacto', event_label: 'boton_flotante' });
  }
}
