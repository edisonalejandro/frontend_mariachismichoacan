export interface ContactRequest {
  nombre: string;
  email: string;
  mensaje: string;
}

export interface ContactResponse {
  id: number;
  nombre: string;
  email: string;
  mensaje: string;
  createdAt: string;
}

export interface BookingRequest {
  nombre: string;
  telefono: string;
  fechaEvento: string;
  tipoEvento: string;
  mensaje?: string;
}

export interface BookingResponse {
  id: number;
  nombre: string;
  telefono: string;
  fechaEvento: string;
  tipoEvento: string;
  mensaje?: string;
  status: 'PENDIENTE' | 'CONFIRMADO' | 'CANCELADO';
  createdAt: string;
}

export interface TestimonialResponse {
  id: number;
  nombre: string;
  comentario: string;
  rating: number;
  visible: boolean;
  createdAt: string;
}

export interface MediaResponse {
  id: number;
  url: string;
  tipo: 'IMAGE' | 'VIDEO';
  descripcion?: string;
  visible: boolean;
  createdAt: string;
}
