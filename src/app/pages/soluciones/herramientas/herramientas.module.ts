import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerramientasRoutingModule } from './herramientas-routing.module';
import { ShareModule } from '../../../share/share.module';
import { WorkspaceComponent } from './workspace/workspace.component';
import { RackspaceComponent } from './rackspace/rackspace.component';
import { EducationComponent } from './education/education.component';
import { Microsoft365Component } from './microsoft365/microsoft365.component';
import { MapsComponent } from './maps/maps.component';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [WorkspaceComponent, RackspaceComponent, EducationComponent, Microsoft365Component, MapsComponent],
  imports: [
    CommonModule,
    HerramientasRoutingModule,
    ShareModule,
    TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ]
})
export class HerramientasModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
