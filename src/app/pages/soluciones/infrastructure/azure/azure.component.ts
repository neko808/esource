import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';
import { gsap, Power1, Power3, Linear } from "gsap"; 

@Component({
  selector: 'app-azure',
  templateUrl: './azure.component.html',
  styleUrls: ['./azure.component.scss', '../infra.scss']
})
export class AzureComponent implements OnInit {

  seguridad:string = 'layers';
  seguridadNo:number = 0;
  interval:any;


  // interesesCards:Array<Object> = [
  //   {
  //     name:'Microsoft 365',  
  //     icon: `microsoft365.png`, 
  //     url: '/microsoft365'
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

    this.title.setTitle('Microsoft Azure');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Azure es un proveedor de nube hibrida de Microsoft que cuenta con más de 100 servicios y que permite crear aplicaciones útiles con servicios de inteligencia artificial y datos sólidos' 
    })
    this.meta.updateTag({
      name: 'keywords',
      content: 'Cloud, Azure, Microsoft, Nube Hibrida, Azure Stack, inteligencia artificial,  nube de Microsoft, Microsoft Azure, Advanced Support for Partners, Cloud Solution Provider'
    })

    this.interval = setInterval(() => {
      this.seguridadNo = this.seguridadNo !== 3 ? this.seguridadNo +1 : this.seguridadNo = 0;
      let solutions = ['layers', 'hardware', 'attacks', 'global'];
      console.log(this.seguridadNo)
      this.changeSeguridad(solutions[this.seguridadNo]);
    }, 6000)  
    
    /*     COUNTER       */
    var konditionen = gsap.timeline();

    const observerElement = document.querySelector('.table');
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    function handleIntersect(entry) {

      if (entry[0].intersectionRatio > 0) {
        konditionen.from(".figure span", {
          duration: 2,
          ease: "none",
          innerText: 0,
          roundProps: "innerText",
          onUpdate: function () {
            this.targets().forEach(target => {
              const val = gsap.getProperty(target, "innerText");
            });
          },
        });
      } else {
      }
    }

    observer.observe(observerElement);
  }

  goToSection(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }

  changeSeguridad(solucion) {
    this.seguridad = solucion;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  };


  
}
