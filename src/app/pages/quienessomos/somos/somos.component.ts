import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { FormComponent } from '../../../share/form/form.component';
import { MapaComponent } from './mapa/mapa.component';
import anime from 'animejs/lib/anime.min.js';


@Component({
  selector: 'app-somos',
  templateUrl: './somos.component.html',
  styleUrls: ['./somos.component.scss']
})
export class SomosComponent implements OnInit {

  service: string = 'cloud';
  count: number = 0;
  anim: any;

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }

  ngOnInit(): void {

    this.title.setTitle('Somos eSource Capital');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Empresa experta en consultoría empresarial de soluciones en la nube y transformación del trabajo' 
    })
    this.meta.updateTag({
      name: 'keywords',
      content: 'esource capital, consultoria empresarial, soluciones en la nube, transformación del trabajo, tecnología, modelo de trabajo, operaciones empresariales, la nube, Cloud Advantage Assesment, Educación en Google Workspace, Google Cloud Partner,  ISPs, Telcos, cloud partner, metodologia'
    })

  	if (isPlatformBrowser(this.platformId)) {
      this.anim = setInterval(() => {
        const services = ['cloud', 'education', 'implement','join'];
        this.count === 3 ? this.count = 0 :  this.count += 1;        
        this.service = services[this.count];
      }, 7000);
    }
  }

  ngOnDestroy() {
    if (this.anim) {
      clearInterval(this.anim);
    }
  }

  ngAfterViewInit() {
  }


}
