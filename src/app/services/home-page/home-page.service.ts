import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conteudo } from '../../../../models/conteudo.models';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private apiUrl = 'https://www.cmsnews.dix.digital/api/v1/home-page';
  private token = '64b6eab039817';

  constructor(private http: HttpClient) {}

  getConteudos(): Observable<{ conteudos: Conteudo[] }> {
    const headers = new HttpHeaders({ App: this.token });
    return this.http.get<{ conteudos: Conteudo[] }>(this.apiUrl, { headers });
  }
}
