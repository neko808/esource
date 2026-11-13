import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AzureComponent } from '../azure/azure.component';
import { GcpComponent } from './gcp/gcp.component';

const routes: Routes = [
  {path: 'gcp', component: GcpComponent},
  {path: 'azure', component: AzureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GcpRoutingModule { }
