import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {
  private apiUrl = 'https://66f8c0722a683ce97310157b.mockapi.io/api/v1/';

  constructor(private http: HttpClient) { }

  getAsignaturas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAsignaturasByDocente(docenteId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?docenteId=${docenteId}`);
  }
}
