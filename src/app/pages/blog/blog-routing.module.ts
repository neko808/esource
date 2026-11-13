import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PaginaComponent } from './blog/pagina/pagina.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { DetalleComponent } from './categorias/detalle/detalle.component';
import { TituloComponent } from './titulo/titulo.component';

const routes: Routes = [
	{ path: 'blog', component: BlogComponent },
	{ path: 'pagina/:id/:slug', component: PaginaComponent },
	{ path: 'categorias/:category', component: CategoriasComponent },
	{ path: 'detalle/:id/:slug', component: DetalleComponent },
	{ path: 'titulo', component: TituloComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
