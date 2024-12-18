import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    PagesRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: []
})
export class PagesModule { }
