import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
    // initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
    relativeLinkResolution: 'legacy'
}

const routes: Routes = [
	  {
    path: ``, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  	},
    {
    path: ``, loadChildren: () =>
      import('./pages/quienessomos/quienessomos.module').then(m => m.QuienessomosModule)
    },
    {
    path: ``, loadChildren: () =>
      import('./pages/soluciones/herramientas/herramientas.module').then(m => m.HerramientasModule)
    },
    {
    path: ``, loadChildren: () =>
      import('./pages/soluciones/infrastructure/gcp/gcp.module').then(m => m.GcpModule)
    },
    {
    path: ``, loadChildren: () =>
      import('./pages/servicios/servicios.module').then(m => m.ServiciosModule)
    },
    {
    path: ``, loadChildren: () =>
      import('./pages/casos-exito/casos-exito.module').then(m => m.CasosExitoModule)
    },
    {
    path: ``, loadChildren: () =>
      import('./pages/contacto/contacto.module').then(m => m.ContactoModule)
    },
    {
    path: ``, loadChildren: () =>
      import('./pages/blog/blog.module').then(m => m.BlogModule)
    },
    {
    path: ``, loadChildren: () =>
      import('./pages/privacidad/privacidad.module').then(m => m.PrivacidadModule)
    },

  	
  	{ path: '', redirectTo: '', pathMatch: 'full' },
  	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
