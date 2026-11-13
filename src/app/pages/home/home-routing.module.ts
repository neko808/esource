import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompartirComponent } from './compartir/compartir.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'compartir', component: CompartirComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }







