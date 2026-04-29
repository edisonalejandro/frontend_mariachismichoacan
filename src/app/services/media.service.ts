import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MediaResponse } from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class MediaService {
  private url = `${environment.apiUrl}/media`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<MediaResponse[]> {
    return this.http.get<MediaResponse[]>(this.url);
  }
}
