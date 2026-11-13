import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gcp',
  templateUrl: './gcp.component.html',
  styleUrls: ['./gcp.component.scss', '../../infra.scss']
})
export class GcpComponent implements OnInit {

  // interesesCards:Array<Object> = [
  //   {
  //     name:'Google Workspace',  
  //     icon: `box.png`, 
  //     url: '/workspace'
  //   },
  //   {
  //     name:'Google Maps',  
  //     icon: `maps.svg`, 
  //     url: '/maps'
  //   }
  // ]

  solution:string = 'industria';
  card:string = 'retail';
  interval:any;
  solutionNo:number = 0;

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {

    this.title.setTitle('Google Cloud Platform');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Google Cloud Platform provee las herramientas más confiables, escalables y flexibles para modernizar todo su negocio' 
    })
    this.meta.updateTag({
      name: 'keywords',
      content: 'Google cloud, GCP, Google Cloud Platform, Transformación digital, Google, eSource capital, Amarello, Inteligencia Artificial, data-driven, cloud, retail, finance, Media & Entertainment, Modernización de Infraestructura, Modernización de Aplicaciones, análisis de datos, Migración a la nube, Anteater, E-commerce, Website Search, Google Cloud Partner'
    })

    this.interval = setInterval(() => {
      this.solutionNo = this.solutionNo !== 2 ? this.solutionNo +1 : this.solutionNo = 0;
      let solutions = ['industria', 'negocio', 'nube'];
      console.log(this.solutionNo)
      this.changeSolution(solutions[this.solutionNo], 'interval');
    }, 6000)
  }

  changeSolution(solucion, interval) {
    // clearInterval(this.interval);
    interval !== '' ? '' : clearInterval(this.interval);
    console.log(this.interval)
    this.solution = solucion;
    switch (solucion) {
      case 'industria':
        this.card = 'retail'
        break;
      case 'negocio':
        this.card = 'infra'
        break;
      case 'nube':
        this.card = 'anthos'
        break;
      default:
        break;
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  };

}
