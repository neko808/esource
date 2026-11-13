import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { PaginaComponent } from './blog/pagina/pagina.component';

import { FilterPipe } from './blog/filter.pipe';

//Pagination
import { NgxPaginationModule } from 'ngx-pagination';
import { MatchesCategoryPipe } from './blog/matches-category.pipe';
import { CategoriasComponent } from './categorias/categorias.component';
import { DetalleComponent } from './categorias/detalle/detalle.component';
import { TituloComponent } from './titulo/titulo.component';

@NgModule({
  declarations: [BlogComponent, PaginaComponent, FilterPipe, MatchesCategoryPipe, CategoriasComponent, DetalleComponent, TituloComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BlogRoutingModule,
    NgxPaginationModule
  ]
})
export class BlogModule { }
