import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DetailNoticiaComponent } from './detail-noticia/detail-noticia.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'noticias/:id/:label', component: NoticiasComponent},
  {path: 'detalhes', component: DetailNoticiaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
