import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavItem } from '../../../../models/navitem.models';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, NgClass],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
  standalone: true
})

export class MainLayoutComponent implements OnInit{

  navItems: NavItem[] = [
    { id: 34, name: "Home", is_active: 1 },
    { id: 68, name: "Profissional", is_active: 1 },
    { id: 78, name: "Politica", is_active: 1 },
    { id: 79, name: "Economia", is_active: 1 },
    { id: 80, name: "Educação", is_active: 1 },
    { id: 81, name: "Esporte", is_active: 1 },
    { id: 82, name: "Cidade", is_active: 1 },
    { id: 84, name: "Palestras", is_active: 1 },
    { id: 85, name: "Negócios", is_active: 1 },
  ];

  isMenuOpen: boolean = false;
  activeRoute: string = '/';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Escuta as mudanças de rota para atualizar o item ativo
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url;
      }
    });
  }

  navigateTo(item: NavItem): void {
    this.router.navigate([item.name === 'Home' ? '/' : `/noticias/${item.id!}`]);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
