import { Component, Input } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { Midia } from '../../../../models/midia.models';
import { Conteudo } from '../../../../models/conteudo.models';
import { HomePageService } from '../../services/home-page/home-page.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TipoConteudo } from '../../../../models/tipoconteudo.models';

@Component({
  selector: 'app-home',
  imports: [Carousel],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {

  currentSlide: number = 0;
  slideInterval: any;

  isMenuOpen: boolean = false;
  loading: boolean = true;

  constructor(
    private router: Router
    // ,private homePageService: HomePageService
  ) { }

  ngOnInit(): void {
    // this.homePageService.getConteudos().subscribe({
    //   next: (data) => {
    //     this.conteudos = data.conteudos;
    //     this.loading = false;
    //   },
    //   error: (err) => {
    //     console.error('Erro ao buscar conteúdos:', err);
    //     this.loading = false;
    //   },
    // });
  }
  @Input() midias: Midia[] = [
    {
      id: 1,
      image: 'https://via.placeholder.com/1536x155',
      link: 'https://example.com/link1'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/1536x155',
      link: 'https://example.com/link2'
    }];


    ultimasNoticias: any = {
      "message": "",
      "data": {
        "current_page": 1,
        "data": [
          {
            "id": 15,
            "type": 6,
            "position": 2,
            "image": "http://localhost:8080/storage/contents/qhnu81rIZvWmt6rMTSI0aLZGNAWIVKCnulAAgiiH.jpg",
            "title": "Servico X",
            "descritive": "<p><br></p>",
            "attachment": null,
            "model": null,
            "url": null,
            "status": "P",
            "open": "N",
            "start_date": "2022-10-19",
            "end_date": "2099-10-20",
            "tags": [
              "#diarista"
            ],
            "bond": null,
            "credits": "Frazão H",
            "note": null,
            "published_at": "2023-01-11 17:20:19",
            "slug": "servico-x-2",
            "subtitle": "O serviço de diarista esta muito escasso.",
            "created_at": "2022-10-19T13:32:04.000000Z",
            "updated_at": "2023-01-11T20:20:20.000000Z",
            "site_id": 4,
            "code": null,
            "page_id": 3,
            "endpoint": null
          },
          
          {
            "id": 16,
            "type": 7,
            "position": 2,
            "image": "http://localhost:8080/storage/contents/qhnu81rIZvWmt6rMTSI0aLZGNAWIVKCnulAAgiiH.jpg",
            "title": "Servico X",
            "descritive": "<p><br></p>",
            "attachment": null,
            "model": null,
            "url": null,
            "status": "P",
            "open": "N",
            "start_date": "2022-10-19",
            "end_date": "2099-10-20",
            "tags": [
              "#diarista"
            ],
            "bond": null,
            "credits": "Frazão H",
            "note": null,
            "published_at": "2023-01-11 17:20:19",
            "slug": "servico-x-2",
            "subtitle": "O serviço de diarista esta muito escasso.",
            "created_at": "2022-10-19T13:32:04.000000Z",
            "updated_at": "2023-01-11T20:20:20.000000Z",
            "site_id": 4,
            "code": null,
            "page_id": 3,
            "endpoint": null
          }
        ],
        "first_page_url": "http://localhost:8080/api/v1/last-news?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://localhost:8080/api/v1/last-news?page=1",
        "links": [
          {
            "url": null,
            "label": "&laquo; Anterior",
            "active": false
          },
          {
            "url": "http://localhost:8080/api/v1/last-news?page=1",
            "label": "1",
            "active": true
          },
          {
            "url": null,
            "label": "Próximo &raquo;",
            "active": false
          }
        ],
        "next_page_url": null,
        "path": "http://localhost:8080/api/v1/last-news",
        "per_page": 25,
        "prev_page_url": null,
        "to": 1,
        "total": 1
      }
    };



  tipoConteudoLista: TipoConteudo[] =[
    {
      id: 1,
      contents: [{
        "id": 1,
        "type": 2,
        "position": 1,
        "image": "https://via.placeholder.com/300x200",
        "title": "Título do Conteúdo 1",
        "subtitle": "Subtítulo do Conteúdo 1",
        "descritive": "Descrição detalhada do conteúdo 1.",
        "start_date": "2024-01-01",
        "end_date": "2024-12-31",
        "published_at": "2024-01-01T12:00:00Z"
      },
      {
        "id": 2,
        "type": 3,
        "position": 2,
        "image": "https://via.placeholder.com/300x200",
        "title": "Título do Conteúdo 2",
        "subtitle": "Subtítulo do Conteúdo 2",
        "descritive": "Descrição detalhada do conteúdo 2.",
        "start_date": "2024-02-01",
        "end_date": "2024-11-30",
        "published_at": "2024-02-01T12:00:00Z"
      },
      {
        "id": 3,
        "type": 3,
        "position": 2,
        "image": "https://via.placeholder.com/300x200",
        "title": "Título do Conteúdo 3",
        "subtitle": "Subtítulo do Conteúdo 3",
        "descritive": "Descrição detalhada do conteúdo 3.",
        "start_date": "2024-02-01",
        "end_date": "2024-11-30",
        "published_at": "2024-02-01T12:00:00Z"
      },
      {
        "id": 4,
        "type": 3,
        "position": 2,
        "image": "https://via.placeholder.com/300x200",
        "title": "Título do Conteúdo 4",
        "subtitle": "Subtítulo do Conteúdo 4",
        "descritive": "Descrição detalhada do conteúdo 4.",
        "start_date": "2024-02-01",
        "end_date": "2024-11-30",
        "published_at": "2024-02-01T12:00:00Z"
      },
      {
        "id": 5,
        "type": 3,
        "position": 2,
        "image": "https://via.placeholder.com/300x200",
        "title": "Título do Conteúdo 5",
        "subtitle": "Subtítulo do Conteúdo 5",
        "descritive": "Descrição detalhada do conteúdo 5.",
        "start_date": "2024-02-01",
        "end_date": "2024-11-30",
        "published_at": "2024-02-01T12:00:00Z"
      },
      {
        "id": 6,
        "type": 3,
        "position": 2,
        "image": "https://via.placeholder.com/300x200",
        "title": "Título do Conteúdo 6",
        "subtitle": "Subtítulo do Conteúdo 6",
        "descritive": "Descrição detalhada do conteúdo 6.",
        "start_date": "2024-02-01",
        "end_date": "2024-11-30",
        "published_at": "2024-02-01T12:00:00Z"
      }]
    }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  moveSlide(direction: number): void {
    this.currentSlide += direction;
    this.currentSlide = (this.currentSlide + this.midias.length) % this.midias.length;
    this.resetSlideShow();
  }

  startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.moveSlide(1);
    }, 6000);
  }

  resetSlideShow(): void {
    clearInterval(this.slideInterval);
    this.startSlideShow();
  }

  irParaTela(link: String) {
    this.router.navigate([link]);
  }

}
