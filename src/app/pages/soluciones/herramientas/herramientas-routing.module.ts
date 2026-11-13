import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Microsoft365Component } from './microsoft365/microsoft365.component';
import { RackspaceComponent } from './rackspace/rackspace.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { EducationComponent } from './education/education.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
	{ path: 'workspace', component: WorkspaceComponent },

	{ path: 'education', component: EducationComponent },

  	{ path: 'rackspace', component: RackspaceComponent },
  	
	{ path: 'microsoft365', component: Microsoft365Component },

	{ path: 'maps', component: MapsComponent }  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerramientasRoutingModule { }
