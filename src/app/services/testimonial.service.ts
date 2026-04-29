import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TestimonialResponse } from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class TestimonialService {
  private url = `${environment.apiUrl}/testimonials`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<TestimonialResponse[]> {
    return this.http.get<TestimonialResponse[]>(this.url);
  }
}
