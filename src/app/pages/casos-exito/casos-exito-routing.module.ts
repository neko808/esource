import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CasosExitoComponent } from './casos-exito/casos-exito.component';

const routes: Routes = [
	{ path: 'casos-exito', component: CasosExitoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasosExitoRoutingModule { }
