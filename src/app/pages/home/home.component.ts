import { Component, Input } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { Midia } from '../../../../models/midia.models';

@Component({
  selector: 'app-home',
  imports: [Carousel],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {
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


}
