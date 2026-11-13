import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrapiRoutingModule } from './strapi-routing.module';
import { StrapiComponent } from './strapi/strapi.component';


@NgModule({
  declarations: [
    StrapiComponent
  ],
  imports: [
    CommonModule,
    StrapiRoutingModule
  ]
})
export class StrapiModule { }
