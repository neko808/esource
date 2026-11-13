import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-microsoft365',
  templateUrl: './microsoft365.component.html',
  styleUrls: ['./microsoft365.component.scss']
})
export class Microsoft365Component implements OnInit {

  plan:string = 'business';
  servicio:string = 'office';
  interval:any;  
  servicioNo:number = 0;
  planH:string;
  // interesesCards:Array<Object> = [
  //   {
  //     name:'Microsoft Azure',  
  //     icon: `azure.png`, 
  //     url: '/'
  //   },
  //   {
  //     name:'Aceleración digital',  
  //     icon: `aceleracion.png`, 
  //     url: '/'
  //   }
  // ]

  constructor(
    private viewportScroller: ViewportScroller,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {

    this.title.setTitle('Microsoft 365');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Manejamos sin intermediarios el ciclo de vida de los productos de Microsoft 365 y Microsoft Azure' 
    })
    this.meta.updateTag({
      name: 'keywords',
      content: 'Microsoft, Microsoft 365, Microsoft Azure, Microsoft partner, eSource capital, Word, Excel, Powerpoint, Onenote, Onedrive, Outlook, Teams, La nube, Microsoft Official Cloud Solution Provider, intranet'
    })

    this.interval = setInterval(() => {
      this.servicioNo = this.servicioNo !== 7 ? this.servicioNo +1 : this.servicioNo = 0;
      let servicios = ['office', 'acceso', 'admin', 'correo', 'compartir', 'video', 'sla', 'soporte'];
      this.changeServicio(servicios[this.servicioNo], 'interval');
    }, 5000)
    this.planH = `${document.getElementById('business').scrollHeight + 90}px`;

  }

  goToSection(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }

  changePlan(plan) {
    let elm = document.getElementById(plan);
    this.planH = `${elm.offsetHeight + 2}px`;
    this.plan = plan;
  }

  changeServicio(solucion, interval) {
    interval !== '' ? '' : clearInterval(this.interval);
    this.servicio = solucion;
  }
  

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  };

}
