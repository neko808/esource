import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-acceleracion-digital',
  templateUrl: './acceleracion-digital.component.html',
  styleUrls: ['./acceleracion-digital.component.scss', '../servicios.scss']
})
export class AcceleracionDigitalComponent implements OnInit {

  // interesesCards:Array<Object> = [
  //   {
  //     name:'Google Worskpace',  
  //     icon: `box.png`, 
  //     url: '/workspace'
  //   },
  //   {
  //     name:'Rackspace',  
  //     icon: `rackspace.png`, 
  //     url: '/'
  //   }
  // ]

  constructor(
    private title: Title,
    private meta: Meta
    ) { }

  ngOnInit(): void {

        this.title.setTitle('Aceleración digital');
        this.meta.updateTag({ 
            name: 'description', 
            content: 'Adquirir la tecnología no es suficiente. Para obtener beneficios trascendentes, es necesario lograr su aplicación eficiente en la operación empresaria' 
        })
        this.meta.updateTag({ 
            name: 'keywords',
            content: 'esource capital, aceleración digital, operación empresarial, automatización de procesos, tecnología, Aplicaciones de productividad, Digiflow, Aplicaciones de Recursos Humanos,Automatizacion de procesos, Workflows, Intranet Corporativa, soluciones en la nube, soluciones locales, integración, Google Workspace, Microsoft 365, Google Cloud Platform, Azure, Copper, SAP, Assessment de procesos, La nube'
        })

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  };

}
