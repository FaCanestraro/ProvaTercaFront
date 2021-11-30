import { FormaP } from './../models/formaP';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormaService {

  private baseUrl = "http://localhost:5000/api/formaPagamento";

  constructor(private http: HttpClient) {}

  list(): Observable<FormaP[]> {
      return this.http.get<FormaP[]>(`${this.baseUrl}/list`);
  }
}
