import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceleracionDigitalComponent } from './acceleracion-digital/acceleracion-digital.component';
import { CustomerComponent } from './customer/customer.component';
import { WorkspaceComponent } from '../soluciones/herramientas/workspace/workspace.component';
import { MigracionSapComponent } from './migracion-sap/migracion-sap.component';
import { RackspaceComponent } from '../soluciones/herramientas/rackspace/rackspace.component';


const routes: Routes = [
  { path: 'acceleracion-digital', component: AcceleracionDigitalComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'migracion-sap', component: MigracionSapComponent},
  { path: 'workspace', component: WorkspaceComponent },
  { path: 'rackspace', component: RackspaceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }


