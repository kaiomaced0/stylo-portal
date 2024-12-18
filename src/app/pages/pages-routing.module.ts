import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DetailNoticiaComponent } from './detail-noticia/detail-noticia.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'noticias/:id', component: NoticiasComponent},
  {path: 'detalhes', component: DetailNoticiaComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
