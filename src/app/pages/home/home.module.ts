import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

/*    Select translate language     */
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/*    Carousel    */
import {IvyCarouselModule} from 'angular-responsive-carousel';

/*   Jquery   */
import * as $ from 'jquery';
import { AnimatedDigitComponent } from './animated-digit/animated-digit.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SliderComponent } from './slider/slider.component';
import { FormComponent } from '../../share/form/form.component';

import { ShareModule } from '../../share/share.module';
import { CompartirComponent } from './compartir/compartir.component';


// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent, AnimatedDigitComponent, CarouselComponent, SliderComponent, CompartirComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule,
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
export class HomeModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
