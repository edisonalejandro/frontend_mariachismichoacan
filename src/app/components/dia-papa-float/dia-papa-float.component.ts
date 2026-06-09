import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dia-papa-float',
  standalone: false,
  template: `
    <div class="papa-float" *ngIf="visible">
      <button class="papa-float__close" (click)="dismiss()" aria-label="Cerrar">✕</button>
      <a href="https://wa.me/56962606833?text=Hola%2C%20quiero%20una%20serenata%20para%20el%20D%C3%ADa%20del%20Padre"
         target="_blank" rel="noopener">
        <img src="assets/logo_dia_papa.png" alt="Feliz Día del Padre - Mariachi Michoacán" />
      </a>
    </div>
  `,
  styles: [`
    .papa-float {
      position: fixed;
      bottom: 2rem;
      left: 2rem;
      z-index: 900;
      width: clamp(130px, 18vw, 190px);
      animation: papaFloat 3.5s ease-in-out infinite;
      filter: drop-shadow(0 8px 24px rgba(0,0,0,0.25));

      img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 50%;
      }

      a { display: block; }
    }

    .papa-float__close {
      position: absolute;
      top: 4px;
      right: 4px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: rgba(0,0,0,0.55);
      color: #fff;
      border: none;
      font-size: 0.65rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      z-index: 1;
      transition: background 200ms;

      &:hover { background: rgba(0,0,0,0.8); }
    }

    @keyframes papaFloat {
      0%, 100% { transform: translateY(0px) rotate(-2deg); }
      50%       { transform: translateY(-12px) rotate(2deg); }
    }

    @media (max-width: 600px) {
      .papa-float {
        bottom: 5rem;
        left: 1rem;
        width: 110px;
      }
    }
  `]
})
export class DiaPapaFloatComponent implements OnInit {
  visible = false;

  ngOnInit() {
    const deadline = new Date('2026-06-22T00:00:00');
    const dismissed = sessionStorage.getItem('papa-float-dismissed');
    this.visible = !dismissed && new Date() < deadline;
  }

  dismiss() {
    sessionStorage.setItem('papa-float-dismissed', '1');
    this.visible = false;
  }
}
