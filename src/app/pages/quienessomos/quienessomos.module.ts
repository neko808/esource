import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuienessomosRoutingModule } from './quienessomos-routing.module';
import { SomosComponent } from './somos/somos.component';
import { FormComponent } from '../../share/form/form.component';
import { MapaComponent } from './somos/mapa/mapa.component';

import { ShareModule } from '../../share/share.module';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [SomosComponent, MapaComponent],
  imports: [
    CommonModule,
    QuienessomosRoutingModule,
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
export class QuienessomosModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
