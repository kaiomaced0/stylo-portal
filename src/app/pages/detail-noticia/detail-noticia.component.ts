import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conteudo } from '../../../../models/conteudo.models';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detail-noticia',
  imports: [NgIf],
  templateUrl: './detail-noticia.component.html',
  styleUrl: './detail-noticia.component.css',
  standalone: true
})
export class DetailNoticiaComponent implements OnInit{
  @Input() item: Conteudo | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:8080/api/v1/pages/34/contents`).subscribe((response: any) => {
      this.item = response.data.data.find((item: any) => item.id === id);
    });
  }

}
