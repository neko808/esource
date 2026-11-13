import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  interesesCards:Array<Object> = [
    {
      name:'Google Worskpace',  
      icon: `Google_Workspace_Logo.svg`, 
      url: '/workspace'
    },
    {
      name:'GCP Onboarding',  
      icon: `gcplat.svg`, 
      url: '/'
    }
  ]


  solution:string = 'transfer';
  interval:any;
  solutionNo:number = 0;


  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
    ) { }

  ngOnInit(): void {

    this.title.setTitle('Customer for life');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Un programa exclusivo para nuestros clientes con el objetivo de brindarles apoyo en la transformación digital de sus empresas' 
    })
    this.meta.updateTag({
      name: 'keywords',
      content: 'Transformación digital, Google cloud, La nube, Google, Administradores certificados, Formación continua, Plataforma de formación propia, Comunicación continua, Google workspace, Customer Success Manage,  helpdesk, ESClearning, webinars, soporte, eSource learning, aprendizaje en linea, cloud, la nube, ToogleBox, intranet, espacios colaborativos, Growing Google, firmas corporativas'
    })

  	this.interval = setInterval(() => {
      this.solutionNo = this.solutionNo !== 3 ? this.solutionNo +1 : this.solutionNo = 0;
      let solutions = ['transfer', 'apoyo', 'projects', 'tooglebox'];
      console.log(this.solutionNo)
      this.changeSolution(solutions[this.solutionNo], 'interval');
    }, 6000)

  }

  changeSolution(solucion, interval) {

    interval !== '' ? '' : clearInterval(this.interval);
    console.log(this.interval)
    this.solution = solucion;

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  };

}
