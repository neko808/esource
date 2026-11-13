import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacidadComponent } from './privacidad/privacidad.component';

const routes: Routes = [
	{ path: 'privacidad', component: PrivacidadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacidadRoutingModule { }
