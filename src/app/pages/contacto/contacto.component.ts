import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare function gtag(...args: any[]): void;

const FORMSPREE_ID = 'xnjwavkg';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  contactForm: FormGroup;
  bookingForm: FormGroup;
  contactSuccess = false;
  bookingSuccess = false;
  contactError = '';
  bookingError = '';
  loading = false;
  today = new Date().toISOString().split('T')[0];

  tiposEvento = ['Boda', 'Cumpleaños', 'Serenata', 'Evento Corporativo', 'Otro'];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      nombre:  ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.bookingForm = this.fb.group({
      nombre:      ['', Validators.required],
      telefono:    ['', Validators.required],
      fechaEvento: ['', Validators.required],
      tipoEvento:  ['', Validators.required],
      mensaje:     ['']
    });
  }

  sendContact() {
    if (this.contactForm.invalid) { this.contactForm.markAllAsTouched(); return; }
    this.loading = true; this.contactError = '';
    this.http.post(`https://formspree.io/f/${FORMSPREE_ID}`, {
      ...this.contactForm.value,
      _subject: 'Nuevo mensaje de contacto — Mariachi Michoacán'
    }).subscribe({
      next: () => { this.contactSuccess = true; this.contactForm.reset(); this.loading = false; gtag('event', 'form_contact', { event_category: 'contacto', event_label: 'formulario_mensaje' }); },
      error: () => { this.contactError = 'Error al enviar. Intenta de nuevo.'; this.loading = false; }
    });
  }

  sendBooking() {
    if (this.bookingForm.invalid) { this.bookingForm.markAllAsTouched(); return; }
    this.loading = true; this.bookingError = '';
    this.http.post(`https://formspree.io/f/${FORMSPREE_ID}`, {
      ...this.bookingForm.value,
      _subject: 'Nueva reserva — Mariachi Michoacán'
    }).subscribe({
      next: () => { this.bookingSuccess = true; this.bookingForm.reset(); this.loading = false; gtag('event', 'form_booking', { event_category: 'contacto', event_label: 'formulario_reserva' }); },
      error: () => { this.bookingError = 'Error al enviar. Intenta de nuevo.'; this.loading = false; }
    });
  }

  field(form: FormGroup, name: string) { return form.get(name); }
}
