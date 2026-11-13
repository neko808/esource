import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GcpRoutingModule } from './gcp-routing.module';
import { GcpComponent } from './gcp/gcp.component';
import { ShareModule } from '../../../../share/share.module';
import { AzureComponent } from '../azure/azure.component';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [GcpComponent, AzureComponent],
  imports: [
    CommonModule,
    GcpRoutingModule,
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
export class GcpModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
