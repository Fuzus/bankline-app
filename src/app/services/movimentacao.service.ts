import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timestamp } from 'rxjs';

const BASE_URL = "https://fuzusnoary-dio-bankline-api.herokuapp.com"

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get(`${BASE_URL}/movimentacoes`);
  }

  create(movimentacao: any): Observable<any> {
    return this.http.post(`${BASE_URL}/movimentacoes`, movimentacao);
  }

  findByIdConta(idConta:any) : Observable<any> {
    return this.http.get(`${BASE_URL}/movimentacoes/${idConta}`)
  }
}
