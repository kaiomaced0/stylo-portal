import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      },
      { path: '**', redirectTo: '' }
    ]
  }];
