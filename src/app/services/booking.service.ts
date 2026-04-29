import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BookingRequest, BookingResponse } from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private url = `${environment.apiUrl}/bookings`;

  constructor(private http: HttpClient) {}

  create(request: BookingRequest): Observable<BookingResponse> {
    return this.http.post<BookingResponse>(this.url, request);
  }
}
