import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { AcceleracionDigitalComponent } from './acceleracion-digital/acceleracion-digital.component';
import { ShareModule } from 'src/app/share/share.module';
import { MigracionSapComponent } from './migracion-sap/migracion-sap.component';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [CustomerComponent, AcceleracionDigitalComponent, MigracionSapComponent],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
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
export class ServiciosModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
