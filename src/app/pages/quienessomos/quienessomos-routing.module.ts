import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SomosComponent } from './somos/somos.component';

const routes: Routes = [
   { path: 'somos', component: SomosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuienessomosRoutingModule { }
