import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conteudo } from '../../../../models/conteudo.models';

@Component({
  selector: 'app-noticias',
  imports: [],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css',
  standalone: true
})
export class NoticiasComponent implements OnInit {

  items: Conteudo[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // this.http.get('http://localhost:8080/api/v1/pages/34/contents').subscribe((response: any) => {
    //   this.items = response.data.data;
    // });
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['/details', id]);
  }
}
